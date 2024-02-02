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
        className=" rounded-full bg-white/50  shadow-md"
      >
        <span className="sr-only">최상단이동버튼</span>
        <div className="p-3 hover:animate-bounce">
          <BiArrowToTop
            className="text-gray-500 dark:text-gray-100"
            size="20"
          />
        </div>
      </button>
    </>
  );
};
export default TopBtn;
