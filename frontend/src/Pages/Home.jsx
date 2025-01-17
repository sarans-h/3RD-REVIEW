import { useRef } from "react";
import InteractiveHoverButton from "../components/ui/interactive-hover-button";
import { RainbowButton } from "../components/ui/rainbow-button";
import RetroGrid from "../components/ui/retro-grid";
import Contact from "./Contact";
import Features from "./Features";
import Pricing from "./Pricing";
import { useNavigate } from "react-router-dom";
import { Link } from "lucide-react";

function Home({ sectionsRef }) {
  const navigate=useNavigate();
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#151719] overflow-hidden md:shadow-xl">
        <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent mb-4">
          &zwnj; Testimonials &zwnj;
        </span>
        <RetroGrid />
        <div className="z-50 flex flex-col items-center ">
          <RainbowButton onClick={()=>navigate('/dashboard')}>
            <span className="text-white">Start for free ✨</span>
          </RainbowButton>

          <InteractiveHoverButton onClick={() => sectionsRef.pricing.current.scrollIntoView({ behavior: "smooth" })}/>
            <a href="https://www.npmjs.com/package/testimonials-3rd" target="_blank" rel="noopener noreferrer" className="text-white underline">
            <Link className="text-pink-500 inline text-sm mr-3 " />
            NPM PACKAGE

            </a>
        </div>
      </div>
      <div ref={sectionsRef.features}>
        <Features />
      </div>
      <div ref={sectionsRef.pricing}>
        <Pricing />
      </div>
      <div ref={sectionsRef.contact}>
        <Contact />
      </div>
    </>
  );
}

export default Home;
