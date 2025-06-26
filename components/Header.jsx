import { FaGlobe } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="bg-[#F55A5A] text-white flex justify-center items-center gap-2 mb-12 min-h-[3.4375rem]">
        <FaGlobe width={6} />
        <h1 className="text-sm font-medium">my travel journal.</h1>
      </header>
    </>
  );
}
