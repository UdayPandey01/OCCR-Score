import { Banner } from "./components/landingPage/Banner";
import { Hero } from "./components/landingPage/Hero";

export default function Home() {
  return (
    <div>
    <Banner />
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <Hero />
    </div>
  );
}
