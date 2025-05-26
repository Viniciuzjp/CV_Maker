'use client';

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { GiPolarBear } from "react-icons/gi";
import { VscGithubProject } from "react-icons/vsc";
import { PiReadCvLogo } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";

export default function Header() {
  const [count, setCount] = useState(0);
  const handleShowSideBar = () => {
    const sideBar = document.getElementById("sideBar");
    if (sideBar){
      sideBar.style.height = "100vh";
      sideBar.style.transition = "height 0.5s";
      setCount(count + 1);
    }
    if (sideBar && count === 1){
      sideBar.style.height = "65px";
      setCount(count - 1);
    }
  }

  const handleLogout = () => {
    if (localStorage){
      localStorage?.clear();
    }
  };

    return (
        <>
        <div id="sideBar" className="flex flex-col h-[65px] fixed w-[70px] gap-10 items-center">
            <IoMenu onClick={handleShowSideBar} className="mt-3 absolute" size={40} color="#ffffff" />
            <TiHomeOutline className="mt-20 hover:rotate-45 transition-ease-in duration-300 hover:size-[50px]" size={35} color="#000000" />
            <VscGithubProject className="mt-3 hover:rotate-45 transition-ease-in duration-300 hover:size-[50px]" size={35} color="#000000" />
            <PiReadCvLogo  className="mt-3 hover:rotate-45 transition-ease-in duration-300 hover:size-[50px]" size={35} color="#000000" />
            <FaRegBell className="mt-3 hover:rotate-45 transition-ease-in duration-300 hover:size-[50px]" size={35} color="#000000" />
            <RiLogoutCircleLine onClick={handleLogout} className="mt-70 hover:rotate-45 transition-ease-in duration-300 hover:size-[50px]" size={35} color="#000000" />
        </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 shadow-md flex justify-between items-center w-screen h-[65px]">
                <div className="ml-20">
                <Link href={"/"}>
                <GiPolarBear size={50} color="#ffffff" />
                </Link>
                </div>
                <div className="flex mr-3">
                <div className="text-center">
                <Link href={"/login"}>
                <h3 className="mr-3 text-white font-bold p-3">Log in</h3>
                </Link>
                </div>
                <div className="bg-[#202020] rounded-[40px] w-[100px] text-center">
                <Link href={"/register"}>
                <h3 className="text-white font-bold p-3">Sign up</h3>
                </Link>
                </div>
                </div>
            </div>
        </>
    );
}