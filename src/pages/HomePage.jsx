import Hero from "../Components/Hero";
import Projects from "../Components/ProjectSlider";
import About from "../Components/About";
import Facilities from "../Components/Facilities";

function HomePage() {
  return (
    <section className="home-page">
      <Hero />
      <About />
      <hr className="divider" />
      <Projects />
      <Facilities />
    </section>
  );
}

export default HomePage;
