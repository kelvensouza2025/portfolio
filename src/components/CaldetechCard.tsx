import Image from "next/image";
import CaldetechLogo from "../../public/caldetech.svg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CaldetechCard() {
  return (
    <Link href={"/docs/caldetech"}>
      <div className="text-[#DFDFD6] bg-[#202127] rounded-[18px] max-w-[400px] min-h-[364px]">
        <div className=" rounded-t-[18px] flex items-center justify-center bg-linear-to-r from-orange-300 to-orange-600 py-3">
          <Image src={CaldetechLogo} alt="" className="w-40 h-40" />
        </div>

        <div className="flex flex-col px-6 py-4 gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <p>Caldetech Soluções em Tecnologia</p>
              <p>Sistema de Gestão de Loja</p>
            </div>

            <div className="flex flex-wrap gap-1">
              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                AWS
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                MVC
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                SAAS
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                RBAC
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                CI/CD
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                NEST
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                NEXT
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                PRISMA ORM
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                REACT NATIVE
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                TAILWIND CSS
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                MULTI-TENANT
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                GITHUB ACTIONS
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                MULTIPLATAFORMA
              </span>

              <span className="flex h-fit w-fit text-[8px] font-thin bg-[#DFDFD6] text-black py-1 px-2 rounded-full whitespace-nowrap">
                INTEGRAÇÃO COM SERVIÇOS DE TERCEIROS
              </span>
            </div>
          </div>

          <Link
            href={"/"}
            className="hidden bg-[#DFDFD6] w-full flex items-center justify-center rounded-[18px]"
          >
            <ArrowUpRight className="text-foreground" />
          </Link>
        </div>
      </div>
    </Link>
  );
}
