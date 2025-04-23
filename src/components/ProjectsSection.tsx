import React from "react";
import CaldetechCard from "./CaldetechCard";
import ZooCard from "./ZooCard";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6 sm:flex-row">
        <CaldetechCard />

        <ZooCard />
      </div>
    </div>
  );
}
