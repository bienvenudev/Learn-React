import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="text-center">
      <img src="../images/bienvenu.jpg" alt="Bienvenu's Portrait" width={320} />
      <h1 className="text-xl font-bold mt-5">Bienvenu Cyuzuzo</h1>
      <p className="text-sm text-[#F3BF99]">Frontend Developer</p>
      <a
        className="text-[.7rem]"
        href="https://bienvenudev.github.io/portfolio/"
      >
        Bienvenu's Portfolio
      </a>

      <div className="flex gap-8 justify-center mt-4">
        <button className="flex gap-2 items-center py-2 px-7 rounded-sm bg-white text-[#374151]">
          {/* <span>📧 </span> */}
          <MdEmail className="text-[#1E1F26]" />
          Email
        </button>

        <button className="flex gap-2 items-center py-2 px-7 rounded-sm bg-[#5093E2] text-white">
          <FaLinkedin />
          Linkedin
        </button>
      </div>
    </div>
  );
}
