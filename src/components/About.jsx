import myImg from "../assets/MY2.png";
import cirImgOne from "../assets/circular-text.png";
import cirImgTwo from "../assets/10329496.png";
import vsImg from "../assets/vscode.png";
import mongoImg from "../assets/mongodb.png";
import gitImg from "../assets/git.png";
import reactImg from "../assets/react.svg";
import langIconOne from "../assets/code-icon.png";
import langIconDark from "../assets/code-icon-dark.png";
import eduIcon from "../assets/edu-icon.png";
import eduIconDark from "../assets/edu-icon-dark.png";
import proIcon from "../assets/project-icon.png";
import proIconDark from "../assets/project-icon-dark.png";
import tailwindIcon from "../assets/tailwindcss-icon-icon-lg.png";

export default function About() {
  const tools = [
    { name: "React", icon: reactImg },
    { name: "MongoDB", icon: mongoImg },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Git", icon: gitImg },
    { name: "VS Code", icon: vsImg },
  ];

  const data = [
    {
      name: "Languages",
      icon1: langIconOne,
      icon2: langIconDark,
      description: "C++, JavaScript (ES6+), TypeScript, HTML5, CSS3",
    },
    {
      name: "Education",
      icon1: eduIcon,
      icon2: eduIconDark,
      description: "B.Tech CSE (DS + AI), SRMU — 2022–2025",
    },
    {
      name: "Experience",
      icon1: proIcon,
      icon2: proIconDark,
      description: "7-month Full Stack apprenticeship at Techpile",
    },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 pt-[4.5rem] text-lg font-Ovo">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src={myImg}
            alt="Ankul Verma"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img src={cirImgOne} alt="" className="w-full animate-spin_slow" />
            <img
              src={cirImgTwo}
              alt=""
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Full Stack Developer with hands-on apprenticeship experience
            building responsive, API-driven applications using the MERN stack
            and Next.js. B.Tech in Computer Science &amp; Engineering
            (Data Science &amp; AI) from Shri Ramswaroop Memorial University.
            I work with modular UI, REST APIs, databases, Docker, and
            AI-assisted tools like Cursor and GitHub Copilot.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((item) => (
              <li
                key={item.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
              >
                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                <img
                  src={item.icon2}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {tools.map((tool) => (
              <li
                key={tool.name}
                title={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg hover:-translate-y-1 duration-500"
              >
                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
