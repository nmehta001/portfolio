import { SVGIcon } from "@/types";

import AtLogo from "../../assets/at.svg?react";

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
      Icon: AtLogo,
    },
    {
      text: "video games i've completed",
      quantity: 67,
      Icon: AtLogo,
    },
    {
      text: "countries i've visited",
      quantity: 7,
      Icon: AtLogo,
    },
  ];

  // mb-[10rem] xl:mb-[15rem] mt-[15rem] xl:mt-[20rem]

  return (
    <div className="relative mb-[10rem] xl:mb-[15rem] mt-[5rem] lg:mt-[15rem] xl:mt-[20rem]">
      <div className="w-4/5 h-[600px] rounded-bl-full rounded-br-full bg-white absolute left-0 right-0 -top-[29rem] lg:-top-[25.8rem] mx-auto -z-0 " />
      <div className="w-1/5 h-1/5 rounded-tl-full rounded-tr-full bg-[#FF83EC] absolute -left-[1.5rem] lg:-left-[3.5rem] -top-[2rem] lg:-top-[11.3rem] mx-auto -rotate-[19deg] lg:-rotate-[39deg]" />
      <div className="w-1/5 h-1/5 rounded-tl-full rounded-tr-full bg-[#FF83EC] absolute -right-[1.5rem] lg:-right-[3.5rem] -top-[2rem] lg:-top-[11.3rem] mx-auto rotate-[19deg] lg:rotate-[39deg]" />

      <div className="bg-[#FF83EC] text-[#fff] px-5 lg:px-10 pt-60">
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase text-2xl lg:text-5xl text-center">
            Welcome to my world of
            <br /> color and play.
          </h1>
          <AtLogo className="h-[100px] w-[100px] lg:h-[400px] lg:w-[400px]" />
        </div>

        <div className="flex flex-col">
          <p className="self-start text-xl lg:text-4xl mb-[2rem] lg:mb-0">
            some fun <br />
            facts about me:
          </p>
          <div className="self-end">
            {facts.map((fact) => (
              <Fact {...fact} />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 mt-[2rem] mb-0">
          <p className="lg:px-4">
            i am a graphic and digital designer with a focus on book design and
            design experiences. my passions lie in mental health, feminism
            within design and creating a world for my audience to escape into. i
            am fuelled by exploration, experimentation and play and i find
            inspiration in the many interests i hold within my personal life
            which include reading, gaming and fitness.
          </p>
        </div>
      </div>
      <div className="w-[200%] h-[120%] rounded-bl-full rounded-br-full bg-[#FF83EC] absolute -left-[50%] -bottom-[10rem] xl:-bottom-[16rem] -z-10" />
    </div>
  );
};
