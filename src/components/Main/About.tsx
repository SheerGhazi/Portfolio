import React from "react";
import BtnSecondary from "../Button/BtnSecondary";

const About = () => {
  return (
    <div className="pt-16">
      <BtnSecondary title="About" />
      <h1 className="pt-10 text-4xl tracking-widest leading-snug">
        Every great design begin with an even{" "}
        <span className="text-tertiary">better story</span>
      </h1>
      <p className="text-primary text-base pt-8 leading-loose">
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time.
      </p>
    </div>
  );
};

export default About;
