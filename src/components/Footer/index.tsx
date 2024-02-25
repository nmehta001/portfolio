import { SVGIcon } from "@/types";
import AtLogo from "../../assets/at.svg?react";
import BehanceLogo from "../../assets/behance.svg?react";
import InstagramLogo from "../../assets/instagram.svg?react";

interface IconLink {
  externalUrl: string;
  Icon: SVGIcon;
  changeStroke: boolean;
}

export const Footer = () => {
  const icons: IconLink[] = [
    {
      externalUrl: "https://www.instagram.com/lauramariacastelo",
      Icon: InstagramLogo,
      changeStroke: false,
    },
    { externalUrl: "", Icon: BehanceLogo, changeStroke: false },
    {
      externalUrl: "mailto:lauracastelo1994@gmail.com",
      Icon: AtLogo,
      changeStroke: true,
    },
  ];

  const links = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "projects", url: "/projects" },
  ];

  return (
    <div className="flex flex-col lg:flex-row m-10 justify-between items-center ">
      <div className="flex">
        {icons.map(({ externalUrl, Icon, changeStroke }) => (
          <a href={externalUrl} target="_blank">
            <Icon
              className={`h-[50px] w-[50px] ${!changeStroke ? "fill-[#FF83EC]" : "fill-none stroke-[#FF83EC]"} ml-3`}
            />
          </a>
        ))}
      </div>
      <div>
        <ul className="hidden lg:flex justify-between mt-2">
          {links.map(({ name, url }) => (
            <li className="mr-10">
              <a href={url} className="hover:text-[#27B8FA]">
                <span
                  className="pb-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#27B8FA]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
                >
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[1rem] lg:mt-0">
        <p>&copy; Laura Castelo - {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
