import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-[20rem] mx-auto bg-[#1A1B21]">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
