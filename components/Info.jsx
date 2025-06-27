import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="text-center mt-4 rounded-xl">
      <img
        className="rounded-t-xl"
        src="/images/bienvenu.jpg"
        alt="Bienvenu's Portrait"
        width={320}
      />
      <h1 className="text-xl font-bold mt-5">Bienvenu Cyuzuzo</h1>
      <p className="text-sm text-[#F3BF99]">Frontend Developer</p>
      <a
        className="text-[.7rem]"
        href="https://bienvenudev.github.io/portfolio/"
      >
        Bienvenu's Portfolio
      </a>

      <div className="flex gap-8 justify-center mt-4">
        <a
          href="mailto:cbienvenu007@gmail.com"
          className="flex gap-2 items-center py-2 px-7 rounded-sm bg-white text-[#374151] cursor-pointer hover:opacity-80"
        >
          {/* <span>📧 </span> */}
          <MdEmail className="text-[#1E1F26]" />
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/bienvenu-cyuzuzo/"
          target="_blank"
          className="flex gap-2 items-center py-2 px-7 rounded-sm bg-[#5093E2] text-white cursor-pointer hover:opacity-80"
        >
          <FaLinkedin />
          Linkedin
        </a>
      </div>
    </div>
  );
}
