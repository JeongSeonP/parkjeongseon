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
      className="p-3 rounded-full bg-white/50  shadow-md"
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
          <TbMoonFilled size={20} className="text-amber-200" />
        )}
      </motion.div>
    </button>
  );
}
