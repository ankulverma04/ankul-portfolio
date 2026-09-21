import imgOne from "../assets/work-3.png";
import imgTwo from "../assets/trading.webp";
import imgSigma from "../assets/sigmagpt.png";

export default function Work() {
  const workData = [
    {
      id: 3,
      name: "SigmaGPT",
      icon: imgSigma,
      description: "AI chat app · OpenAI, MERN, Vercel",
      link: "https://sigma-gpt-omega.vercel.app/",
    },
    {
      id: 1,
      name: "Zerodha Trading Platform Clone",
      icon: imgTwo,
      description: "MERN Stack",
      link: "https://zerodha-frontend-fwjs.onrender.com",
    },
    {
      id: 2,
      name: "Developer Portfolio Website",
      icon: imgOne,
      description: "React, Tailwind CSS, Vercel",
      link: "https://github.com/ankulverma04",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Featured Projects</h4>

      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Selected work including SigmaGPT, a Zerodha trading dashboard clone, and
        this portfolio — built with React, Node.js, and Tailwind CSS.
      </p>

      <div className="grid grid-cols-auto my-10 gap-6 dark:text-black transition-all duration-500">
        {workData.map((item) => (
          <div
            key={item.id}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden cursor-pointer group"
            style={{ backgroundImage: `url(${item.icon})` }}
            onClick={() => window.open(item.link, "_blank")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                window.open(item.link, "_blank");
              }
            }}
            role="link"
            tabIndex={0}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 duration-500 group-hover:bottom-7 shadow-md">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
