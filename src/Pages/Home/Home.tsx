import { Typewriter } from "@/components/TypeWriter";
import logoPng from "/logo.png";

import projectJpg from "/project.jpg";

export const Home = () => {
  const projects = [
    {
      imageSrc: projectJpg,
      name: "s/hero magazine",
      link: "",
    },
    {
      imageSrc: projectJpg,
      name: "kintsugi quilt",
      link: "",
    },
    {
      imageSrc: projectJpg,
      name: "if i should have a daughter animation",
      link: "",
    },
  ];

  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col justify-center items-center mt-[4rem]">
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
            text="welcome to my world of colour + play"
            speed={300}
          />
        </div>

        <div className="flex flex-col mt-[20rem]">
          <p className="text-3xl font-black">let's explore</p>
          <div className="flex flex-row justify-between mt-4">
            {projects.map((project) => (
              <div className="flex flex-col">
                <img width="320px" height="240px" src={project.imageSrc} />
                <p className="mt-2">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
