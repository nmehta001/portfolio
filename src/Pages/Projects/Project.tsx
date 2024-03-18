import { useParams } from "react-router-dom";

import sheroOne from "/shero_1.jpg";
import sheroTwo from "/shero_2.jpg";
import sheroThree from "/shero_3.jpg";
import sheroFour from "/shero_4.jpg";
import sheroFive from "/shero_5.jpg";
import sheroSix from "/shero_6.jpg";

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
        title: "",
        subTitle: [],
        images: [],
      },
      sectionTwo: {
        images: [],
        year: "",
        deliverable: "",
        content: "",
      },
    },
    {
      id: 3,
      sectionOne: {
        title: "",
        subTitle: [],
        images: [],
      },
      sectionTwo: {
        images: [],
        year: "",
        deliverable: "",
        content: "",
      },
    },
    {
      id: 4,
      sectionOne: {
        title: "",
        subTitle: [],
        images: [],
      },
      sectionTwo: {
        images: [],
        year: "",
        deliverable: "",
        content: "",
      },
    },
  ];

  const project = projects.find((project) => project.id === parseInt(id!));

  return (
    <div className="flex flex-col mx-20">
      <h1 className="text-[3rem] lg:text-[7rem] mb-[5rem] lg:mb-[15rem]">{project?.sectionOne.title}</h1>
      <div className="flex flex-col lg:flex-row justify-between relative lg:mb-[15rem]">
        <div className="flex flex-col ">
          {project?.sectionOne.subTitle.map((sub, index) => (
            <p className="text-[2rem] lg:text-[4rem]">
              {sub}
              {index !== project.sectionOne.subTitle.length - 1 ? "," : ""}
            </p>
          ))}
        </div>
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
    </div>
  );
};
