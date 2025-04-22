import Image from "next/image";
import React from "react";

export default function ExperienceSection() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-extrabold text-4xl bg-gradient-to-r from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent">
        EXPERIÊNCIAS
      </h1>

      <div className="flex flex-col text-[#DFDFD6] gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Image
                src={"/eyecare.jpeg"}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="font-bold">Lead Software Engineer at Google</h1>
            </div>

            <p className="text-end text-[#8491A0]">Nov 2019 - Present</p>
          </div>

          <p className="text-justify text-[#8491A0]">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Googles core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Image
                src={"/eyecare.jpeg"}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="font-bold">Lead Software Engineer at Google</h1>
            </div>

            <p className="text-end text-[#8491A0]">Nov 2019 - Present</p>
          </div>

          <p className="text-justify text-[#8491A0]">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Googles core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Image
                src={"/eyecare.jpeg"}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="font-bold">Lead Software Engineer at Google</h1>
            </div>

            <p className="text-end text-[#8491A0]">Nov 2019 - Present</p>
          </div>

          <p className="text-justify text-[#8491A0]">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Googles core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
