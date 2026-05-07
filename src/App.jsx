import "./App.css";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <main className="landing-page">
        <section className="landing-section">
          <p className="landing-section-tagline">CE Student • Embedded Systems Engineer • Software Programmer</p>

          <h1>Hello, I am Patrick Paul.</h1>

          <p className="landing-section-description">
            And I build projects that connect hardware, software, and real-world
            problem solving together. I am passionate about creating innovative solutions that make a positive impact on people's lives. With a strong background in
            computer engineering and a knack for programming, I enjoy tackling
            complex challenges and bringing ideas to life through technology as well as engineering and design.
          </p>

          <div className="landing-section-buttons">
            <a href="#projects" className="button-projects">
              View Projects
            </a>
            <a href="#contact" className="button-contracts">
              Contact Me
            </a>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  );
}

export default App;