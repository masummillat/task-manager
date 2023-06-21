"use client";
import { removeToken } from "@/app/login/action";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const TopNav = () => {
  const { push } = useRouter();
  const handleLogout = () => {
    removeToken();
    push("/login");
  };
  return (
    <div className="w-full h-14 bg-slate-500">
      <ul className="flex items-center h-full p-2">
        <li>
          <AiOutlineLogout
            size={25}
            className="cursor-pointer"
            onClick={handleLogout}
          />
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
