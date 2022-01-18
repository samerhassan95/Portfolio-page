import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroSection from "./herosection/herosection";
import AboutmeSection from "./aboutmesection/aboutmesection";
import SkillsSection from "./skillssection/skillssection";
import PortfolioSection from "./portfoliosection/portfoliosection";
import FooterSection from "./footersection/footersection";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutmeSection />
      <SkillsSection />
      <PortfolioSection />
      <FooterSection />
    </div>
  );
}

export default App;
