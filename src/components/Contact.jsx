import { useState } from "react";
import mailImg from "../assets/mail_icon.png";
import mailImg2 from "../assets/mail_icon_dark.png";
import resumeUrl from "../assets/MRESUME.pdf";
import downloadIcon from "../assets/download-icon.png";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_replyto", data.get("email"));
    data.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ankulvofficial@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        }
      );

      if (!response.ok) throw new Error("Failed to send");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-16 scroll-mt-24">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Have a project in mind or a question? Fill the form below. Your message
        is sent to{" "}
        <a
          href="mailto:ankulvofficial@gmail.com"
          className="underline underline-offset-4"
        >
          ankulvofficial@gmail.com
        </a>
        .
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mb-16"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Portfolio contact form" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/30"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/30"
          />
        </div>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Your message"
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/30"
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-10 py-3 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p className="mt-4 text-green-600 dark:text-green-400">
              Message sent to ankulvofficial@gmail.com. Thank you!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 dark:text-red-400">
              Could not send. Email me at ankulvofficial@gmail.com
            </p>
          )}
        </div>
      </form>

      <div className="text-center">
        <a href="#top" className="inline-block text-[32px] md:text-[40px]">
          Ankul Verma
        </a>

        <div className="w-max flex items-center gap-2 mx-auto mt-3">
          <img src={mailImg} alt="" className="w-5 dark:hidden" />
          <img src={mailImg2} alt="" className="w-5 hidden dark:block" />
          <a href="mailto:ankulvofficial@gmail.com">ankulvofficial@gmail.com</a>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-white/70">
          Lucknow, India ·{" "}
          <a href="tel:+918081883230">+91 8081883230</a>
        </p>

        <a
          href={resumeUrl}
          download="Ankul_Verma_Resume.pdf"
          className="inline-flex items-center gap-2 mt-4 px-6 py-2 border rounded-full border-gray-400 dark:border-white/30 hover:bg-lightHover dark:hover:bg-darkHover"
        >
          Download Resume
          <img src={downloadIcon} alt="" className="w-4" />
        </a>
      </div>

      <div className="border-t border-gray-400 mx-[5%] mt-12 mb-6 py-5">
        <ul className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 w-full justify-center">
          <li>
            <a
              href="https://github.com/ankulverma04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ankul-verma-604372365"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/918081883230"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
