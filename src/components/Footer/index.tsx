import { SVGIcon } from "@/types";
import AtLogo from "../../assets/at.svg?react";
import BehanceLogo from "../../assets/behance.svg?react";
import InstagramLogo from "../../assets/instagram.svg?react";
import { Links } from "../Navigation/Links";

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

  return (
    <div className="flex flex-col lg:flex-row p-10 justify-between items-center bg-[#FF83EC] text-white relative">
      <div className="flex">
        {icons.map(({ externalUrl, Icon, changeStroke }) => (
          <a href={externalUrl} target="_blank">
            <Icon
              className={`h-[50px] w-[50px] ${!changeStroke ? "fill-[#FFF]" : "fill-none stroke-[#FFF]"} ml-3`}
            />
          </a>
        ))}
      </div>
      <div>
        <ul className="hidden lg:flex justify-between mt-2">
          <Links />
        </ul>
      </div>

      <div className="mt-[1rem] lg:mt-0">
        <p>&copy; Laura Castelo - {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
