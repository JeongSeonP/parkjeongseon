"use client";

import { setTheme } from "@/utils/setTheme";
import { motion } from "framer-motion";
import { RiSunFill } from "react-icons/ri";
import { TbMoonFilled } from "react-icons/tb";

export default function ThemeSwitch({
  curTheme,
}: {
  curTheme: "light" | "dark";
}) {
  const handleThemeMode = () => {
    const newTheme = curTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <button
      className="p-3 rounded-full bg-white/90 border border-indigo-300 shadow-lg backdrop-blur-sm"
      type="button"
      onClick={handleThemeMode}
    >
      <span className="sr-only">{`${curTheme} mode`}</span>
      <motion.div
        whileHover={{
          rotate: [0, -35],
        }}
      >
        {curTheme === "light" ? (
          <RiSunFill size={20} className="text-amber-500" />
        ) : (
          <TbMoonFilled size={20} className="text-yellow-400" />
        )}
      </motion.div>
    </button>
  );
}
