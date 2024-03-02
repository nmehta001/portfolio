import { Typewriter } from "@/components/TypeWriter";
import logoPng from "/logo.png";

import Wave from "../../assets/wave.svg?react";

export const Home = () => {
  return (
    <>
      <div className="m-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="self-start flex">
            <p>hello</p>&nbsp;
            <Typewriter text={"i'm"} speed={250} />
          </div>
          <img
            className="object-scale-down pr-20 pl-10 max-w-[350px] lg:max-w-[1225px]"
            src={logoPng}
          />
          <Typewriter
            className="self-end"
            text="it's a pleasure to meet you"
            speed={300}
          />
        </div>
      </div>
      <div className="h-screen relative mt-[15rem]">
        <Wave className="absolute -top-[200px] left-0 right-0 mx-auto" />
        <div className="flex flex-col lg:flex-row items-center lg:justify-around w-full mt-[5rem] text-white">
          <p className="z-10 text-[#fff] lg:text-[#FF83EC]">
            i design for emotion;
            <br /> taking the time to understand who and what i'm designing for.
            <br />
            what matters most to me are people.
          </p>
          <p className="self-end mt-[2rem] lg:mt-0 text-[#FF83EC]">
            so,
            <br />
            <br /> take a minute,
            <br /> breathe.
            <br /> check in with yourself.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-around w-full text-white">
        <p className="text-[#FF83EC]">
          when you choose to work with me,
          <br />
          you work with a friend not a colleague.
        </p>
        <p className="text-[#fff] lg:text-[#FF83EC]">
          i care about who you are,
          <br />
          how you feel
          <br />
          what you're about
        </p>
        <Wave className="absolute left-0 right-0 mx-auto" />
      </div>
      <div className="flex items-center justify-center mt-[15rem] mb-[2.5rem] lg:mt-[30rem] lg:mb-[5rem]">
        <h1 className="text-4xl lg:text-7xl">so let's explore</h1>
      </div>
    </>
  );
};
