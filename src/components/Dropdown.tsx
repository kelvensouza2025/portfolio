"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Dropdown = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOption = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const options = [
    { title: "Opção 1", content: "Conteúdo da opção 1." },
    { title: "Opção 2", content: "Conteúdo da opção 2." },
    { title: "Opção 3", content: "Conteúdo da opção 3." },
  ];

  return (
    <div className="w-full pl-16 pr-4">
      {options.map((option, index) => (
        <div key={index} className="border-t border-white/10">
          <button
            onClick={() => toggleOption(index)}
            className="w-full flex justify-between items-center h-[52px] font-semibold text-sm"
          >
            {option.title}
            {openIndex === index ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openIndex === index && (
            <div className="mt-4 text-gray-600">{option.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
