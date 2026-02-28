import imgOne from "../assets/work-3.png";
import imgTwo from "../assets/trading.webp";
import imgThree from "../assets/openai.png";
import { useState } from "react";

export default function Work() {

  const workData = [
    {
      id: 1,
      name: "Frontend Project(Deploy in Progress   🚧)",
      icon: imgOne,
      description: "Web Design",
      link: "",
    },
    {
      id: 2,
      name: "OpenAi(Deploy in Progress   🚧)",
      icon: imgThree,
      description: "Website",
      link: "",
    },
    {
      id: 3,
      name: "Zerodha Clone (in Progress   🚧)",
      icon: imgTwo,
      description: "Website",
      link: "",
    },
     {
      id: 4,
      name: "Food Project (Next 🚧)",
      description: "Website",
      link: "",
    },
    
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    if (visibleCount >= workData.length) {
      setVisibleCount(3); // Show Less
    } else {
      setVisibleCount(workData.length); // Show More
    }
  };

  return (
    <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">

      <h4 className="text-center mb-2 text-lg font-Ovo">
        My Portfolio
      </h4>

      <h2 className="text-center text-5xl font-Ovo">
        My Latest Work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-auto my-10 gap-6 dark:text-black transition-all duration-500">

        {workData.slice(0, visibleCount).map((item) => (

          <div
            key={item.id}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${item.icon})` }}
          >

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md">

              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-700">
                  {item.description}
                </p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={item.icon} alt="" className="w-5" />
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Toggle Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleToggle}
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
        >
          {visibleCount >= workData.length ? "Show Less" : "Show More"}
        </button>
      </div>

    </div>
  );
}