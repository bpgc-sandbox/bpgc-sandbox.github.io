import sandboxLogo from '../assets/SandboxLogo.min.png';
import aboutus from '../assets/aboutus.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-text">
          <h2>Welcome to Sandbox</h2>
          <p>
            Sandbox is BITS Goa's Incubation Center which aims to foster
            innovative projects and ideas by providing State-of-the-Art
            facilities and guidance to the students.
          </p>
          <div className="vid">
            <span className="material-symbols-outlined">play_circle</span>
            <span>Watch the video</span>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              If innovation makes you tick, if wanting to make a change in the
              society with your engineering skills is your dream, the Sandbox
              provides you with the perfect platform for it. Well-equipped with
              industry-standard facilities, the lab provides BITS Pilani’s
              students with a conducive environment to work upon the next world-
              changing idea. The best project ideas, practical enough to be
              incorporated into the industry and with the potential to make a
              difference are chosen through a selection procedure and the
              student teams get 24*7 access to the lab facility to make their
              ideas a reality.
              <br />
              <br /> Set up with the aim to provide the best resources, to
              bridge the gap between academia and industry and to foster real-
              time problem-solving skills and learning in our students the
              Sandbox has seen it all - successful projects, patents and
              startups.
            </p>
          </div>
          <img src={aboutus} alt="" />
        </div>
      </section>
      <section className="projects-section">
        <h1>Projects</h1>
        <p>
          A plethora of projects are presently being worked on in the Sandbox
          Labs.
        </p>
        <p>
          View more <a href="">Projects</a>
        </p>
      </section>
      <footer>
        <div className="social">
          <div className="logo">
              <img src={sandboxLogo} alt="" />
            <span>SANDBOX</span>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/SandboxBPGC/" target="_blank">
              <div className="social-logo" id="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/sandbox-innovation-lab/about/"
              target="_blank"
            >
              <div className="social-logo" id="linkedin" />
            </a>
            <a href="https://www.instagram.com/sandbox_bitsg/" target="_blank">
              <div className="social-logo" id="instagram" />
            </a>
          </div>
        </div>
        <div className="footer-reachout">
          <ul></ul>
        </div>
        <div className="footer-contactus">
          <form action=""></form>
        </div>
      </footer>
    </main>
  );
}

export default Home;
