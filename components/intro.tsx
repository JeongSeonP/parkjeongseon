"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdMailOutline } from "react-icons/md";

export default function Intro() {
  return (
    <section
      className="w-11/12 mx-auto text-center pb-16 scroll-mt-36"
      id="home"
    >
      <div className="w-full relative mt-3 mb-4">
        <motion.div
          className="mx-auto bg-amber-50/80 dark:bg-slate-700/80 blur-xl w-full h-24 sm:w-1/2 sm:h-20 rounded-full "
          initial={{ scale: 1 }}
          animate={{ scale: [1.1, 1] }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 font-bold text-center text-lg text-slate-900 dark:text-gray-300"
          animate={{ scale: [1.1, 1] }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
        >
          <p className="font-normal">안녕하세요. </p>
          <div className="sm:flex-row flex-col">
            <p className="inline-block">
              다른 일 많이 해본 프론트엔드 개발 주니어{" "}
            </p>
            <p className="inline-block">
              <span className="text-xl pl-2"> 박정선 </span>
              <span className="font-normal">입니다.</span>
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="mx-auto mb-10 size-64 rounded-full overflow-hidden border-2 border-white drop-shadow-md"
        initial={{ rotate: 0 }}
        animate={{ rotate: [-10, -15, 0] }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
        }}
      >
        <Image
          src={"/assets/profile.jpg"}
          alt="프로필이미지"
          width={250}
          height={250}
          priority
          className="w-auto h-auto"
        />
      </motion.div>

      <div>
        <div>
          <MdMailOutline />
        </div>
        <div>
          <MdMailOutline />
        </div>
      </div>
    </section>
  );
}
