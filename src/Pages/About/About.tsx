import { SVGIcon } from "@/types";

import Curve from "../../assets/curve.svg?react";

import BoardingPass from "../../assets/boarding_pass.svg?react";
import Books from "../../assets/books.svg?react";
import Controller from "../../assets/controller.svg?react";
import Me from "../../assets/me.svg?react";

interface Fact {
  className?: string;
  text: string;
  Icon: SVGIcon;
  quantity: number;
}

const Fact = ({ text, quantity, Icon, className }: Fact): JSX.Element => {
  return (
    <div className={`text-[#fff] flex flex-row items-center ${className}`}>
      <p>{text}:</p>
      <Icon className="h-[50px] lg:h-[200px] w-[50px] lg:w-[200px]" />
      <p className="text-4xl">{quantity}</p>
    </div>
  );
};

export const About = (): JSX.Element => {
  const facts: Fact[] = [
    {
      text: "books i've read",
      quantity: 394,
      Icon: Books,
    },
    {
      text: "video games i've completed",
      quantity: 67,
      Icon: Controller,
    },
    {
      text: "countries i've visited",
      quantity: 7,
      Icon: BoardingPass,
    },
  ];

  return (
    <div className="relative">
      <Curve className="absolute rotate-[180deg] -z-10 top-[18rem]" />
      <div className="mb-[10rem] lg:mb-[15rem]">
        <div className="flex flex-col w-full justify-center items-center">
          <Me className="h-[300px] lg:h-[425px]" />
          <p className="mt-2">pleasure to meet you!</p>
        </div>
        <div className="bg-[#FF83EC] text-white px-10 mt-[10rem] lg:mt-[20rem]">
          <div className="lg:w-1/2 lg:mt-[2rem]  mb-[3rem] lg:mb-[5rem] ">
            <p>
              i am a graphic designer with a focus on book design and design
              experiences. my passions lie in mental health, feminism within
              design and creating a world for my audience to escape into. i am
              fuelled by exploration, experimentation and play and i find
              inspiration in the many interests i hold within my personal life
              which include reading, gaming and fitness.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="self-start text-xl lg:text-4xl mb-[2rem]">
              some fun <br />
              facts about me:
            </p>
            <div className="self-end lg:pr-[12rem] mb-[4rem]">
              {facts.map((fact) => (
                <Fact {...fact} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Curve className="absolute rotate-[180deg] -z-0 bottom-[4rem] lg:-bottom-[5rem] text-white" />
    </div>
  );
};
