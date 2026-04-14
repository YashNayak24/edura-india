  import { GlobalStyles } from "./components/aboutPage/utils";
import AboutHero from "./components/aboutPage/AboutHero";
import AboutStats from "./components/aboutPage/AboutStats";
import AboutJourney from "./components/aboutPage/AboutJourney";
import AboutMission from "./components/aboutPage/AboutMission";
import AboutValues from "./components/aboutPage/AboutValues";
import AboutCTA from "./components/aboutPage/AboutCTA";


export default function About({ onBookDemoClick }) {
  return (
    <div className="font-[Plus_Jakarta_Sans,sans-serif] bg-[#F4F6FB] antialiased overflow-x-hidden">
      {/* Inject all global keyframes + utility classes once */}
      <GlobalStyles />

      <AboutHero onBookDemoClick={onBookDemoClick} />
      <AboutStats />
      <AboutJourney />
      <AboutMission />
      <AboutValues />
      <AboutCTA />
    </div>
  );
}