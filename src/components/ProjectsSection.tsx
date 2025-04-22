import React from "react";
import CaldetechCard from "./CaldetechCard";
import ZooCard from "./ZooCard";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <h1 className="font-extrabold text-4xl bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
        PROJETOS
      </h1>

      <div className="flex flex-col gap-6 sm:flex-row">
        <CaldetechCard />

        <ZooCard />
      </div>
    </div>
  );
}
