import React from "react";
import BtnSecondary from "../Button/BtnSecondary";
import Image from "next/image";
import Round_text from "../../../public/round-text.png";
import { ArrowDown } from "lucide-react";

const Introduction = () => {
  return (
    <div>
      <BtnSecondary title="Introduction" />
      <h1 className="text-left font-extralight text-5xl leading-tight tracking-wider pt-8 lg:text-6xl lg:font-thin lg:leading-snug">
        Say Hi from <span className="text-tertiary">Sher Ghazi</span>, Framer
        Designer and Developer
      </h1>
      <p className="text-primary text-base pt-8 leading-loose lg:pr-80 ">
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </p>

<div className="md:flex justify-end">
      <div className="relative inline-block pt-10  ">
        <Image src={Round_text} alt="" className="animate-spin-slow" />
        <ArrowDown className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:size-10 mt-4" />
        </div>
      </div>

      <div className="flex gap-10 pt-12 md:gap-20">
        <div>
          <h3 className="text-5xl text-tertiary">10+</h3>
          <p className="text-primary text-lg pt-4 leading-relaxed ">Years of Experiance</p>
        </div>
        <div>
          <h3 className="text-5xl text-tertiary">182+</h3>
          <p className="text-primary text-lg pt-4 leading-relaxed ">Projects Completed on 15 Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
