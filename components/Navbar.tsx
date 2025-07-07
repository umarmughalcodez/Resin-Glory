"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-100% h-22 border flex items-center justify-center">
      <Image
        className="cursor-pointer"
        src={logo}
        alt="Logo"
        width={80}
        height={80}
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Navbar;
