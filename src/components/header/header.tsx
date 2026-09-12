"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { GiPolarBear } from "react-icons/gi";
import { VscGithubProject } from "react-icons/vsc";
import { PiReadCvLogo } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { Flex, Text } from "@av-digital/components";

export default function Header() {
  const [count, setCount] = useState(0);
  const handleShowSideBar = () => {
    const sideBar = document.getElementById("sideBar");
    if (sideBar) {
      sideBar.style.height = "100vh";
      sideBar.style.transition = "height 0.5s";
      setCount(count + 1);
    }
    if (sideBar && count === 1) {
      sideBar.style.height = "65px";
      setCount(count - 1);
    }
  };

  const handleLogout = () => {
    if (localStorage) {
      localStorage?.clear();
    }
  };

  return (
    <>
      <div
        id="sideBar"
        className="flex z-2 flex-col h-[65px] bg-white fixed w-[60px] gap-3 items-center max-md shadow-md"
      >
        <IoMenu
          onClick={handleShowSideBar}
          className="mt-3 absolute"
          size={40}
          color="#737373"
        /> 
        <TiHomeOutline
          className="mt-20 size-[25px] hover:rotate-45 transition-ease-in duration-300 hover:size-[25px]"
          size={35}
          color="#737373"
        />
        <VscGithubProject
          className="mt-3 size-[25px] hover:rotate-45 transition-ease-in duration-300 hover:size-[25px]"
          size={35}
          color="#737373"
        />
        <PiReadCvLogo
          className="mt-3 size-[25px] hover:rotate-45 transition-ease-in duration-300 hover:size-[25px]"
          size={35}
          color="#737373"
        />
        <FaRegBell
          className="mt-3 size-[25px] hover:rotate-45 transition-ease-in duration-300 hover:size-[25px]"
          size={35}
          color="#737373"
        />
        <RiLogoutCircleLine
          onClick={handleLogout}
          className="mt-3 size-[25px] hover:rotate-45 transition-ease-in duration-300 hover:size-[25px]"
          size={35}
          color="#737373"
        />
      </div>
      <Flex justify="between" align="center" className="shadow-md w-screen h-[65px]">
        <div className="ml-20">
          <Link href={"/"}>
            <GiPolarBear size={50} color="#ffffff" />
          </Link>
        </div>
        <Flex className="mr-3">
          <div className="text-center">
            <Link href={"/login"}>
              <Text variant="body" weight="bold" classname="mr-3 p-3">Log in</Text>
            </Link>
          </div>
          <div className="bg-[#202020] rounded-[40px] w-[100px] text-center">
            <Link href={"/register"}>
              <Text variant="body" weight="bold" classname="text-white p-3">Sign up</Text>
            </Link>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
