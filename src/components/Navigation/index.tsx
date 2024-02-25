export const Navigation = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "projects", url: "/projects" },
  ];

  return (
    <div className="flex flex-row justify-end m-10">
      <ul className="flex justify-between">
        {links.map(({ name, url }) => (
          <li className="mr-10 last:mr-0">
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
  );
};
