import mailImg from "../assets/mail_icon.png";
import mailImg2 from "../assets/mail_icon_dark.png";
export default function Contact() {
  return (
    <div id="contact" className="mt-5 scroll-mt-24">
      {" "}
      <div className="text-center">
        <a href="#!">
          <h1
            className="cursor-pointer mr-14 dark:hidden "
            style={{ fontSize: "40px", marginLeft: "55px" }}
          >
            Ankul Verma
          </h1>
          <h1
            className=" cursor-pointer mr-14 hidden dark:block "
            style={{ fontSize: "40px", marginLeft: "55px" }}
          >
            Ankul Verma{" "}
          </h1>
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mailImg} alt="" className="w-5 dark:hidden" />
          <img src={mailImg2} alt="" className="w-5 hidden dark:block" />

          <a href="mailto:contact@prebuiltui.com">ankulvofficial@gmail.com</a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-evenly border-t border-gray-400 mx-[10%] mt-12 mb-12 py-3">
        <ul className="flex items-center gap-20 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/ankulverma04">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ankul-verma-604372365">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#!">Twitter</a>
          </li>
          <li>
            <a href="https://wa.me/+919236544141">Whatsapp</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
