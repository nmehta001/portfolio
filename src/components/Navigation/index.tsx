import { Links } from "./Links";

export const Navigation = () => {
  return (
    <div className="flex flex-row justify-end m-10">
      <ul className="flex justify-between">
        <Links />
      </ul>
    </div>
  );
};
