"use client";

import { hashLinks } from "@/lib/hashLinks";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <motion.header
      className="z-[999] fixed flex flex-col sm:flex-row sm:justify-between sm:px-12 items-center sm:w-4/5 w-full sm:mt-4 p-2 sm:p-1 bg-white/90 dark:bg-slate-950/80 sm:rounded-full backdrop-blur-sm shadow-md shadow-slate-500/5 dark:shadow-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h1 className="mb-2">
        <Link href="/">
          <motion.div
            className="rounded-full bg-slate-500 shadow hover:bg-slate-400 "
            whileHover={{
              rotate: [0, 30],
            }}
          >
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </motion.div>
          <span className="sr-only">박정선 포트폴리오</span>
        </Link>
      </h1>
      <nav>
        <ul className="flex">
          {hashLinks.map((link) => (
            <li
              className="relative mx-2 w-24 h-10  text-sm font-bold rounded-full text-zinc-600 dark:text-zinc-400 hover:text-slate-900"
              key={link.name}
            >
              <Link
                className={`flex justify-center items-center size-full ${
                  selectedMenu === link.name &&
                  "text-slate-900 dark:text-zinc-50"
                }`}
                href={link.hash}
                onClick={() => setSelectedMenu(link.name)}
              >
                {link.name}
                {link.name === selectedMenu && (
                  <motion.div
                    className="absolute size-full -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    layoutId="selectedMenu"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
