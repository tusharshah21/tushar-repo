"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Skills from "./Skills";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied brands</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 ">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      {/* marquee section */}
        {/* <Skills/> */}
      </div>  
    </section>
  );
};

export default Clients;
