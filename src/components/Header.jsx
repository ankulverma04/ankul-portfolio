import { useEffect, useState } from "react";
import myImg from "../assets/MY.png";
import handIcon from "../assets/hand-icon.png";
import rightArrowWhite from "../assets/right-arrow-white.png";
import downloadIcon from "../assets/download-icon.png";

const resumeUrl = "/MRESUME.pdf";

export default function Header() {
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    if (!showPdf) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setShowPdf(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showPdf]);

  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 profile-section"
    >
      <img
        src={myImg}
        alt="Ankul Verma"
        className="rounded-full w-32 h-32 mt-5 object-cover"
      />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Ankul Verma
        <img src={handIcon} alt="" className="w-6 mb-1" />
      </h3>
      <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-Ovo leading-tight">
        Full Stack Developer
      </h1>
      <p className="text-lg md:text-xl font-Ovo text-gray-700 dark:text-white/80">
        MERN Stack &amp; Next.js
      </p>
      <p className="max-w-2xl mx-auto font-Ovo">
        Full Stack Developer from Lucknow with a 7-month apprenticeship at
        Techpile Technology Pvt. Ltd. I build responsive, API-driven web apps
        with React, Next.js, Node.js, Express, and MongoDB — from modular UI
        to REST APIs, auth, and deployment.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 flex-wrap">
        <a
          href="#contact"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact me
          <img src={rightArrowWhite} alt="" className="w-4" />
        </a>

        <button
          type="button"
          className="px-10 py-2.5 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:bg-transparent dark:border-white/50 hover:bg-lightHover dark:hover:bg-darkHover transition"
          onClick={() => setShowPdf(true)}
        >
          View Resume
        </button>

        <a
          href={resumeUrl}
          download="Ankul_Verma_Resume.pdf"
          className="px-10 py-2.5 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:bg-transparent dark:border-white/50 hover:bg-lightHover dark:hover:bg-darkHover transition"
        >
          Download Resume
          <img src={downloadIcon} alt="" className="w-4" />
        </a>
      </div>

      {showPdf && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPdf(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div
            className="!bg-white !text-gray-900 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-200">
              <h2 id="resume-modal-title" className="font-Ovo text-lg text-gray-900">
                Resume
              </h2>
              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-sm rounded-full border border-gray-400 hover:bg-gray-100"
                >
                  Open tab
                </a>
                <a
                  href={resumeUrl}
                  download="Ankul_Verma_Resume.pdf"
                  className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setShowPdf(false)}
                  className="w-9 h-9 rounded-full border border-gray-400 hover:bg-gray-100"
                  aria-label="Close resume"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={`${resumeUrl}#view=FitH`}
              title="Ankul Verma resume PDF"
              className="w-full flex-1 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
