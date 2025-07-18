import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Upload Job", url: "/upload-job" },
    { name: "About Us", url: "/about-us" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-5">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.url}
          className="relative px-3 py-2 text-white transition duration-300 hover:text-cyan-300 group"
        >
          {link.name}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
