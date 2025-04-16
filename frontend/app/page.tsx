import Footer from "./components/landingPage/footer";
import { Hero } from "./components/landingPage/Hero";
import ScoreContainer from "./components/landingPage/ScoreContainer";

export default function Home() {

  return (
    <div>
      <ScoreContainer />

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black"></div>
      <Hero />

      <Footer />
    </div>
  );
}
