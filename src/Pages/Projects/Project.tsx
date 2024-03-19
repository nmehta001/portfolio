import { useParams } from "react-router-dom";

import { ProjectCarousel } from "./ProjectCarousel";
import {
  daughterOne,
  daughterTwo,
  kintsugiFive,
  kintsugiFour,
  kintsugiOne,
  kintsugiSix,
  kintsugiThree,
  kintsugiTwo,
  reflectionFive,
  reflectionFour,
  reflectionOne,
  reflectionSix,
  reflectionThree,
  reflectionTwo,
  sheroFive,
  sheroFour,
  sheroOne,
  sheroSix,
  sheroThree,
  sheroTwo,
} from "@/components/Images";

export const Project = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      sectionOne: {
        title: "s/hero magazine",
        subTitle: ["bold", "bright", "female"],
        images: [sheroOne, sheroTwo, sheroThree, sheroFour],
      },
      sectionTwo: {
        images: [sheroFive, sheroSix],
        year: "2022",
        deliverable: "typographic magazine",
        content:
          "s/hero embodies all the qualities of a strong woman. created to appeal to graphic design students, she takes standing out from the crowd to a whole new level. her cover design reflects the forward thinking associated with the movement and her article spreads embody their subject matters. s/hero is a beautiful typographic magazine which kickstarted my journey with feminism.",
      },
      sectionThree: {
        colors: ["E6ADAF", "CD1719", "028581"],
      },
    },
    {
      id: 2,
      sectionOne: {
        title: "kintsugi quilt",
        subTitle: ["embrace", "your", "flaws"],
        images: [kintsugiOne, kintsugiTwo, kintsugiThree, kintsugiFour],
      },
      sectionTwo: {
        images: [kintsugiFive, kintsugiSix],
        year: "2021",
        deliverable: "graphic statement",
        content:
          '"my breasts are too saggy." "my teeth are too crooked." "i\'m too short." no. you are imperfect and that\'s beautiful. embrace it. the message that it’s ok just to be yourself is more important than ever. this graphic quilt was designed with the intention to nurture and embrace flaws just like the japanese process kintsugi. your mental health is just as important as your physical health, so take care of it.',
      },
    },
    {
      id: 3,
      sectionOne: {
        title: "if i should have a daughter",
        subTitle: ["call me", "point B"],
        images: [],
      },
      sectionTwo: {
        images: [daughterOne, daughterTwo],
        year: "2022",
        deliverable: "motion graphics animation",
        content:
          "if i should have a daughter, i would teach her all the ways being a woman is the most beautiful thing in the world. sarah kay’s spoken word poem has been a favourite for 10 years. speaking to a hypothetical daughter, she teaches her about life and the struggles of being female. this animation brings to fruition the beautiful imagery that sarah weaves with her words, painting a picture of vulnerability and beauty in an unforgiving world.",
      },
    },
    {
      id: 4,
      sectionOne: {
        title: "room of reflections",
        subTitle: ["regain", "control"],
        images: [reflectionOne, reflectionTwo, reflectionThree, reflectionFour],
      },
      sectionTwo: {
        images: [reflectionFive, reflectionSix],
        year: "2022",
        deliverable: "critical structuration",
        content:
          "when we look at art, we don’t think of it as a vessel of expression for the trauma we’ve endured during our lives. the room of reflections is an essay that explores the concept of regaining control of past traumas through creative practice. we all have obstacles we need to overcome, but it’s only through facing them that we can begin to process them. i encourage you to reflect on yourself, you never know what you might find there.",
      },
    },
  ];

  const project = projects.find((project) => project.id === parseInt(id!));

  return (
    <div className="flex flex-col mx-20">
      <h1 className="text-[3rem] lg:text-[7rem] mb-[5rem] lg:mb-[15rem]">
        {project?.sectionOne.title}
      </h1>
      <div className="flex flex-col lg:flex-row justify-between relative lg:mb-[15rem]">
        <div className="flex flex-col ">
          {project?.sectionOne.subTitle.map((sub, index) => (
            <p className="text-[2rem] lg:text-[4rem]">
              {sub}
              {index !== project.sectionOne.subTitle.length - 1 ? "," : ""}
            </p>
          ))}
        </div>
          {project!.id === 3 ? (
            <iframe
              src="https://drive.google.com/file/d/1ZSh0S_rlG0MAK0TFgKRuSQk6QiasTjKD/preview"
              className="mb-4 lg:w-[826px] lg:h-[480px]"
            
            />
          ) : null}
        <div className="flex flex-col lg:flex-row lg:-right-[12rem] lg:absolute mt-[2rem] lg:mt-0">
          {project?.sectionOne.images.map((image) => (
            <img src={image} width="240px" className="mb-10 lg:mb-0 lg:mr-10" />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row relative w-full justify-between">
        <div className="lg:flex lg:flex-row lg:-left-[10rem] lg:absolute">
          {project?.sectionTwo.images.map((image) => (
            <img src={image} width="480px" className="mb-10 lg:mb-0 lg:mr-10" />
          ))}
        </div>
        <div className="lg:w-1/3" />
        <div className="lg: w-1/3" />
        <div className="flex flex-col lg:w-1/3 lg:ml-[5rem] mb-10 lg:mb-[15rem]">
          <div className="block mb-4 ">
            <p>year: </p>
            <p>{project?.sectionTwo.year}</p>
          </div>
          <div className="block mb-16">
            <p>deliverable: </p>
            <p>{project?.sectionTwo.deliverable}</p>
          </div>
          <p className="text-sm">{project?.sectionTwo.content}</p>
        </div>
      </div>
      <ProjectCarousel currentProjectId={project!.id} />
    </div>
  );
};
