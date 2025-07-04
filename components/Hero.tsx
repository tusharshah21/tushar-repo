import { FaFile } from "react-icons/fa6";
import pfp from "../public/profile_pic.png";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center leading-[4rem]">
          <Image src={pfp.src} alt="profile picture" width={400} height={400} className="w-[19%]" />
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Your Vision, My Innovation
          </p> */}
          <TextGenerateEffect
            words="Full Stack Developer Crafting Unique Digital Solutions"
            className="text-center text-[40px] md:text-5xl xl:text-6xl"
          />

          <TextGenerateEffect
            words="Hi! I'm Tushar, passionate about transforming concepts into applications."
            className="font-normal text-center md:tracking-wider -mt-2 text-sm md:text-lg lg:text-2xl"
          />
          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Tushar, passionate about transforming concepts into applications.
          </p> */}

          <a
            href="https://drive.google.com/file/d/1QAJ3DCuBrK5BLuFM3R9OQe7G1lZa8kzN/view?usp=sharing"
            target="_blank"
          >
            <MagicButton
              title="Show my resume"
              icon={<FaFile />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
