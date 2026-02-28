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
      <div className="border-t border-gray-400 mx-[5%] mt-12 mb-12 py-5">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center">

    <ul className="flex flex-col sm:flex-row items-center gap-6 sm:gap-20 w-full justify-center">
      <li>
        <a href="https://github.com/ankulverma04" className="hover:text-gray-500 transition">
          GitHub
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/ankul-verma-604372365" className="hover:text-gray-500 transition">
          LinkedIn
        </a>
      </li>

      <li>
        <a href="#!" className="hover:text-gray-500 transition">
          Twitter
        </a>
      </li>

      <li>
        <a href="https://wa.me/+919236544141" className="hover:text-gray-500 transition">
          Whatsapp
        </a>
      </li>
    </ul>

  </div>
</div>
    </div>
  );
}
