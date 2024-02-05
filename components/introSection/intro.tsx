"use client";

import Image from "next/image";
import profileImg from "@/public/assets/profile.jpg";
import { motion } from "framer-motion";
import { profileDatas } from "@/lib/profileDatas";
import useSetMenuInView from "@/hooks/useSetMenuInView";

export default function Intro() {
  const observeThreshold = 0.5;
  const observeTarget = useSetMenuInView("Home", observeThreshold);
  return (
    <section
      ref={observeTarget}
      className="w-11/12 mx-auto text-center pb-20 scroll-mt-36"
      id="home"
    >
      <div className="w-full relative mt-3 mb-4 sm:mb-10">
        <motion.div
          className="mx-auto bg-amber-50 dark:bg-cyan-950 blur-xl w-full h-32 sm:w-[500px]  rounded-full "
          initial={{ scale: 1 }}
          animate={{ scale: [1.1, 1] }}
        />
        <motion.div
          className="absolute inset-0  flex flex-col items-center justify-center leading-8 font-semibold text-2xl text-slate-900 dark:text-gray-300"
          animate={{ scale: [1.1, 1] }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
        >
          <p>안녕하세요. </p>
          <div className="sm:flex-row flex-col">
            <p
              className="text-stone-700 dark:text-zinc-100"
              id="animate-puls-text"
            >
              도전을 두려워 하지 않는
            </p>
            <p className="inline-block">주니어 Frontend 개발자 </p>
            <p className="inline-block indent-1"> 박정선 입니다.</p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-6">
        <motion.div
          className="size-64 rounded-full overflow-hidden border-2 border-white drop-shadow-md"
          initial={{ rotate: 0 }}
          animate={{ rotate: [-10, -15, 0] }}
          transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
          }}
        >
          <Image
            src={profileImg}
            alt="프로필이미지"
            width={250}
            height={250}
            priority
            className="w-auto"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-2 text-sm font-medium dark:text-slate-800">
          {profileDatas.map((data) => (
            <button
              key={data.name}
              className="text-zinc-100 bg-slate-500 border border-indigo-300 hover:bg-indigo-400 rounded-full shadow-md"
              type="button"
            >
              <a
                className="flex justify-center items-center w-56 py-2"
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.icon}
                <span className="ml-2">{data.name}</span>
              </a>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
