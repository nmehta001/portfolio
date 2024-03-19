import { kintsugiSix, reflectionFive, sheroFive } from "@/components/Images";
import { projectsPath } from "@/components/Navigation/routes";
import { Link } from "react-router-dom";

import placeholder from "/project.jpg";

type Params = {
  currentProjectId: number;
  title?: string;
};

export const ProjectCarousel = ({
  currentProjectId,
  title = "related projects",
}: Params) => {
  const projects = [
    {
      id: 1,
      name: "s/hero magazine",
      coverImage: sheroFive,
      link: `/${projectsPath}/1`,
    },
    {
      id: 2,
      name: "kintsugi quilt",
      coverImage: kintsugiSix,
      link: `/${projectsPath}/2`,
    },
    {
      id: 3,
      name: "if i should have a daughter animation",
      coverImage: placeholder,
      link: `/${projectsPath}/3`,
    },
    {
      id: 4,
      name: "room of reflections",
      coverImage: reflectionFive,
      link: `/${projectsPath}/4`,
    },
  ];

  return (
    <div className="flex flex-col relative lg:mb-8">
      <div className="mb-4">
        <h1 className="text-2xl">{title}</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {projects.map(({ coverImage, id, link, name }) =>
          id !== currentProjectId ? (
            <div className="flex flex-col mb-4 lg:mb-0">
              <Link to={link}>
                <img
                  src={coverImage}
                  className={`w-[350px] ${currentProjectId === 0 ? "lg:w-[280px] lg:h-[200px]" : ""}  mb-2 object-cover`}
                />
              </Link>
              <p>{name}</p>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};
