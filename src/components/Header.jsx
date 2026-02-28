import myImg from "../assets/MY.png";
import { useState } from "react";
export default function Header() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 profile-section ">
      <img src={myImg} alt="" className="rounded-full w-32 h-32 mt-5" />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Ankul Verma
        <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack (MERN) Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I completed a 6-month apprenticeship in Full Stack (MERN) Development at
        Techpile Technology Pvt. Ltd., where I gained hands-on experience
        building real-world projects using MongoDB, Express.js, React, and
        Node.js. I am passionate about creating clean, user-friendly, and
        scalable web solutions.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me{" "}
          <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
        </a>

       
        <div className="text-center my-5">
          <button
            className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
            onClick={() => setShowPdf(!showPdf)}
          >
            {showPdf ? "Hide Resume" : "View Resume"}
          </button>

          {showPdf && (
            <div className="mt-4 " style={{marginBottom:"400px"}}>
              <iframe
                src="../../MRESUME.pdf"
                width="210%"
                height="600px"
                title="Resume PDF"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
