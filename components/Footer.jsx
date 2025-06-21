import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 py-5 bg-[#161619] rounded-b-xl mb-4">
      <FaTwitter className="cursor-pointer hover:opacity-80 w-6 h-6 text-[#918E9B] " />
      <FaLinkedin className="cursor-pointer hover:opacity-80 w-6 h-6 text-[#918E9B] " />
      <FaInstagram className="cursor-pointer hover:opacity-80 w-6 h-6 text-[#918E9B] " />
      <a href="https://github.com/bienvenudev">
        <FaGithub className="cursor-pointer hover:opacity-80 w-6 h-6 text-[#918E9B] " />
      </a>
    </footer>
  );
}
