

"use client";

import React from "react";
import Marquee from "react-fast-marquee";

import { companies} from "@/data";

const Skills = () => {
  return (<>
      {/* marquee section */}
      <Marquee autoFill={true}
        speed={75}
        pauseOnHover={true}
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
