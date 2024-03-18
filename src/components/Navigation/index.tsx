import { Links } from "./Links";

export const Navigation = () => {
  return (
    <div className="flex flex-row justify-center lg:justify-end m-10 z-10">
      <ul className="flex justify-between">
        <Links />
      </ul>
    </div>
  );
};
