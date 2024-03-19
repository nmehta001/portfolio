import { Typewriter } from "@/components/TypeWriter";
import logoPng from "/logo.png";
import { ProjectCarousel } from "../Projects/ProjectCarousel";

export const Home = () => {
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

        <div className="flex flex-col mt-[5rem] lg:mt-[20rem]">
          <ProjectCarousel currentProjectId={0} title="let's explore" />
        </div>
      </div>
    </>
  );
};
