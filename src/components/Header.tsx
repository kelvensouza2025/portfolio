import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex h-16 px-6 bg-[#1b1b1f] flex items-center justify-between border-b border-black">
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-[#DFDFD6]">KELVEN SOUZA</p>

        <CodeXml className="text-[#DFDFD6] sm:hidden" />
      </div>

      <div className="hidden sm:flex gap-8">
        <Link href={"/"} className="text-white">
          Projetos
        </Link>
        <Link href={"/"} className="text-white">
          Contato
        </Link>
      </div>
    </div>
  );
}
