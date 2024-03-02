import { SVGIcon } from "@/types";

import AtLogo from "../../assets/at.svg?react";
import SinWaveAlt from "../../assets/sign-wave-alt.svg?react";

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

  return (
    <div className="relative">
      <SinWaveAlt className="absolute -left-[5%] top-0 z-10 w-[110%]" />
      <div className="relative mb-[10rem] lg:mb-[15rem]">
        <div className="bg-[#FF83EC] mt-[45%] text-white px-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="uppercase text-2xl lg:text-5xl">
              Welcome to my world of <br />
              color and play
            </h1>
            <AtLogo className="h-[100px] w-[100px] lg:h-[400px] lg:w-[400px]" />
          </div>

          <div className="flex flex-col">
            <p className="self-start text-xl lg:text-4xl mb-[2rem]">
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
            <p>
              i am a graphic and digital designer with a focus on book design
              and design experiences. my passions lie in mental health, feminism
              within design and creating a world for my audience to escape into.
              i am fuelled by exploration, experimentation and play and i find
              inspiration in the many interests i hold within my personal life
              which include reading, gaming and fitness.
            </p>
          </div>
          <div className="w-[200%] h-[120%] rounded-bl-full rounded-br-full bg-[#FF83EC] absolute -left-[50%] -bottom-[10rem] xl:-bottom-[16rem] -z-10" />
        </div>
      </div>
    </div>
  );
};
