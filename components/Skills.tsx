

"use client";

import React from "react";
import Marquee from "react-fast-marquee";

import { companies} from "@/data";

const Skills = () => {
  return (<>
    {/* <section id="" className="py-20">
      <div className="flex flex-col items-center max-lg:mt-10 "> */}
        
      {/* marquee section */}
      <Marquee autoFill={true}
        speed={75}
        pauseOnHover={true}
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-16 w-5 mx-4"
                />
              </div>
              
            </React.Fragment>
          ))}
        </Marquee>
      
    </>
  );
};

export default Skills;
