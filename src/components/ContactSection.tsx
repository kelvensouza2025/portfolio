import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import AwsLogo from "../../public/aws.svg";
import DockerLogo from "../../public/docker.svg";
import FigmaLogo from "../../public/figma.svg";
import LaravelLogo from "../../public/laravel.svg";
import NestLogo from "../../public/nestjs.svg";
import NextLogo from "../../public/nextjs2.svg";
import PrismaLogo from "../../public/prisma.svg";
import ReactLogo from "../../public/reactjs.svg";
import TailwindcssLogo from "../../public/tailwindcss.svg";
import TypescriptLogo from "../../public/typescript.svg";
import VuejsLogo from "../../public/vuejs.svg";
import Zod from "../../public/zod.svg";

const logosLine1 = [
  AwsLogo,
  DockerLogo,
  FigmaLogo,
  LaravelLogo,
  NestLogo,
  NextLogo,
];
const logosLine2 = [
  PrismaLogo,
  ReactLogo,
  TailwindcssLogo,
  TypescriptLogo,
  VuejsLogo,
  Zod,
];

export default function ContactSection() {
  return (
    <div className="flex flex-col text-[#DFDFD6] overflow-hidden gap-[88px] items-center bg-[#161618] py-20">
      <div className="flex flex-col items-center gap-4 px-6">
        <h1 className="font-bold text-4xl">CONTATO</h1>

        <Image
          src={"/eu.jpeg"}
          alt=""
          width={240}
          height={240}
          className="rounded-full"
        />

        <p className="text-justify">
          Sou arquiteto de software com 3+ anos de experiência, apaixonado por
          criar soluções robustas, escaláveis e bem estruturadas. Atuo com foco
          em arquitetura de sistemas, utilizando práticas como Clean Code, SOLID
          e componentização para garantir legibilidade, manutenibilidade e
          escalabilidade do código ao longo do tempo.
        </p>

        <div className="flex gap-4">
          <a
            className="flex w-fit font-semibold px-[30px] py-4 text-black bg-white rounded-[50px]"
            target="_blank"
            href="https://www.linkedin.com/in/kelvensouza2025/"
          >
            LinkedIn
          </a>

          <a
            className="flex w-fit font-semibold px-[30px] py-4 text-white border-2 border-white rounded-[50px]"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center w-full">
        <p className="font-semibold text-xl">EXPERIÊNCIA COM</p>

        {/* PRIMEIRA ESTEIRA - indo para a esquerda */}
        <Marquee
          direction="left"
          speed={40}
          gradient={false}
          className="w-full"
        >
          {[...logosLine1, ...logosLine1].map((logo, index) => (
            <div key={index} className="mx-6">
              <Image src={logo} alt="tech logo" width={80} height={80} />
            </div>
          ))}
        </Marquee>

        {/* SEGUNDA ESTEIRA - indo para a direita */}
        <Marquee
          direction="right"
          speed={40}
          gradient={false}
          className="w-full"
        >
          {[...logosLine2, ...logosLine2].map((logo, index) => (
            <div key={index} className="mx-6">
              <Image src={logo} alt="tech logo" width={80} height={80} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
