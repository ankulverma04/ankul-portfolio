import webImg from "../assets/web-icon.png";
import uiImg from "../assets/ui-icon.png";
import graImg from "../assets/graphics-icon.png";

export default function Services() {
  const services = [
    {
      name: "Frontend development",
      icon: uiImg,
      description:
        "Responsive UIs with React.js, Next.js, Redux Toolkit, Context API, Tailwind CSS, and Bootstrap.",
    },
    {
      name: "Backend & APIs",
      icon: webImg,
      description:
        "RESTful APIs with Node.js and Express, JWT authentication, routing, validation, and CRUD workflows.",
    },
    {
      name: "Databases & deployment",
      icon: graImg,
      description:
        "MongoDB and PostgreSQL, plus Docker, Vercel, Render, and AWS (S3/EC2 basics) for shipping apps.",
    },
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Full Stack Developer from Lucknow with a 7-month apprenticeship at
        Techpile Technology Pvt. Ltd., focused on MERN stack and Next.js
        applications.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={service.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {service.description}
            </p>
            <a href="#contact" className="flex items-center gap-2 text-sm mt-5">
              Let&apos;s talk
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
