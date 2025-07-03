"use client";
import Link from "next/link";
import Image from "next/image";
import classes from "../style/header.module.css";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
const Header = () => {
  const [show, setShow] = useState({
    drop1: false,
    drop2: false,
    drop3: false,
    side: false,
  });

  const toggle = (key) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div
      className={`
        w-full bg-gray-700 relative
        
        `}
    >
      {/* ---------------mob only------------- */}
      <button
        className={`
        bg-blue-600 text-white p-2 rounded-2xl absolute top-[20px] left-[20px] z-20
        lg:hidden
        `}
        onClick={() => toggle("side")}
      >
        show
      </button>

      {/* Sidebar + Backdrop */}
      {show.side && (
        <div
          className="fixed inset-0 top-[110px] bg-gray-200 bg-opacity-40 z-0"
          onClick={() => setShow("side")}
        />
      )}
      {/* ---------------------------- */}

      <div
        className={`
        w-full max-w-[1280px] h-[60px] text-gray-200  
        flex justify-between  items-center mx-auto
        max-sm:overflow-hidden 
        max-lg:flex-col-reverse max-lg:h-full max-lg:items-end 
        `}
      >
        {/* --------------------------------- */}
        <div
          className={`
            flex items-center gap-[30px] h-full
      max-md:w-[150px]  transition-all duration-500 ease-in-out
    ${show.side ?  "max-sm:translate-x-0" : " max-sm:translate-x-[150px]"}
        max-lg:flex-col max-lg:h-full  max-lg:fixed max-lg:z-20 max-lg:top-[110px]  max-lg:bg-gray-800 max-lg:pt-[10px]
     
        `}
        >
          <div
            className={`${classes.parent}  w-[150px] flex flex-col justify-center  items-center 
 
        `}
          >
            <div
              className={`${classes.child_} flex flex-col justify-center items-center gap-[10px] text-xl font-bold
            
              `}
              onClick={() => toggle("drop1")}
            >
              <span className="flex items-center gap-[10px]">
                <IoIosArrowDropdown />
                المراكز والوحدات
              </span>
            </div>
              <div
                className={`${classes.drop}  bg-gray-400 w-full
          max-lg:relative
          `}
              >
                <div className={`child_drop`}>
                  <div
                    className={`wraper flex flex-col overflow-hidden transition-all duration-500 ease-in-out 
              ${show.drop1 ? "h-[100px]" : "h-0"}
              xl:h-full
              `}
                  >
                    <Link href="">child_drop</Link>
                    <Link href="">child_drop</Link>
                    <Link href="">child_drop</Link>
                    <Link href="">child_drop</Link>
                  </div>
                </div>
              </div>
          </div>
          {/* --------------------------------------------------------------------------------------------- */}
          <div
            className={`${classes.parent}  flex flex-col  justify-center items-center 
        relative 
        `}
          >
            <Link href="" className={`text-xl font-bold `}>
              مكتب التنسيق والقبول
            </Link>
          </div>
          {/* --------------------------------------------------------------------------------------------- */}

          <div
            className={`${classes.parent} w-[150px] flex flex-col  justify-center items-center 
        relative 
        `}
          >
            <div
              className={`${classes.child_} flex justify-center items-center gap-[10px] text-xl font-bold`}
              onClick={() => toggle("drop2")}
            >
              <span className="flex items-center gap-[10px]">
                <IoIosArrowDropdown />
                الحياة الجامعية
              </span>
            </div>
            <div
              className={`${classes.drop}  bg-gray-400 w-full
          max-lg:relative
          `}
            >
              <div className={`child_drop`}>
                <div
                  className={`wraper flex flex-col overflow-hidden  transition-all duration-500 ease-in-out
            ${show.drop2 ? "h-[100px]" : "h-0"} 
              xl:h-full
              
              `}
                >
                  <Link href="">child_drop</Link>
                  <Link href="">child_drop</Link>
                  <Link href="">child_drop</Link>
                  <Link href="">child_drop</Link>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------- */}
          <div
            className={`${classes.parent}  flex flex-col  justify-center items-center 
        relative 
        `}
          >
            <Link href="" className={`text-xl font-bold`}>
              الكليات والبرامج
            </Link>
          </div>
          {/* --------------------------------------------------------------------------------------------- */}

          <div
            className={`${classes.parent} w-[150px] flex flex-col  justify-center items-center 
        relative 
        `}
          >
            <div
              className={`${classes.child_} flex justify-center items-center gap-[10px] text-xl font-bold`}
              onClick={() => toggle("drop3")}
            >
              <span className="flex items-center gap-[10px]">
                <IoIosArrowDropdown />
                عن الجامعة
              </span>
            </div>
            <div
              className={`${classes.drop}  bg-gray-400 w-full
          max-lg:relative
          `}
            >
              <div className={`child_drop`}>
                <div
                  className={`wraper flex flex-col overflow-hidden  transition-all duration-500 ease-in-out
              ${show.drop3 ? "h-[100px]" : "h-0"} 
              xl:h-full
              
              `}
                >
                  <Link href="">child_drop</Link>
                  <Link href="">child_drop</Link>
                  <Link href="">child_drop</Link>
                  <Link href="">child_drop</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div
            className={`${classes.parent} flex flex-col  justify-center items-center 
        relative 
        `}
          >
            <Link href="" className={`text-xl font-bold`}>
              الرئيسية
            </Link>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div
          className={`logo relative w-[110px] h-[110px] rounded-full bg-gray-400 overflow-hidden 
        top-[40px]
        max-lg:top-0
        `}
        >
          <Image
            fill
            sizes="full"
            src="/logo.png"
            alt="university logo"
            className={`object-contain`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
