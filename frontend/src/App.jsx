import InteractiveHoverButton from "./components/ui/interactive-hover-button";
import { RainbowButton } from "./components/ui/rainbow-button";
import RetroGrid from "./components/ui/retro-grid";
function App() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#151719] overflow-hidden md:shadow-xl">
      <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent mb-4">
      &zwnj; Testimonials &zwnj; 

      </span>
      <RetroGrid />
      <div className="z-50  flex flex-col items-center ">
        <RainbowButton>
          <span className="text-white">Start for free ✨</span>
        </RainbowButton>
        <InteractiveHoverButton />
      </div>
    </div>
  );
}

export default App;
