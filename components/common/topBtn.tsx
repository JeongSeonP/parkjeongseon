"use client";

import { BiArrowToTop } from "react-icons/bi";

const TopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className=" rounded-full bg-white/90 border border-indigo-300 shadow-lg backdrop-blur-sm"
      >
        <span className="sr-only">최상단이동버튼</span>
        <div className="p-3 hover:animate-bounce">
          <BiArrowToTop className="text-gray-500" size="20" />
        </div>
      </button>
    </>
  );
};
export default TopBtn;
