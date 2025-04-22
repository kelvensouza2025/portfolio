import React from "react";
import DocsContent from "./index.mdx";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";

export default function DocsPage() {
  return (
    <div className="text-[#DFDFD6] flex">
      <div className="flex w-[380px] bg-[#161618] flex-col h-[calc(100vh-64px)]">
        <div className="flex pl-16 pr-4 h-[52px] items-center gap-2">
          <Image src={"/caldetech.svg"} alt="" width={20} height={20} />

          <p className="font-semibold">Caldetech</p>
        </div>

        <Dropdown />
      </div>

      <div className="flex flex-col w-full">
        <DocsContent />
      </div>
    </div>
  );
}
