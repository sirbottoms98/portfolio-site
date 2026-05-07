import "./App.css";

function App() {
  return (
    <main className="landing-page">
      <section className="landing-section">
        <p className="landing-section-tagline">
          CE Student • Embedded Systems Engineer • Software Programmer
        </p>

        <h1>Hello, I am Patrick Paul.</h1>

        <p className="landing-section-description">
          And I build projects that connect hardware, software, and real-world
          problem solving together. I am passionate about creating innovative
          solutions that make a positive impact on people's lives. With a strong
          background in computer engineering and a knack for programming, I
          enjoy tackling complex challenges and bringing ideas to life through
          technology as well as engineering and design.
        </p>

        <div className="landing-section-buttons">
          <a href="#projects" className="button button-projects">
            View Projects
          </a>
          <a href="#contact" className="button button-contacts">
            Contact Me
          </a>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          I am a Computer Engineering student with a passion for Embedded
          Systems, Software Development, Electronics, and Problem-Solving. I
          enjoy building projects that combine hardware and software into
          practical real-world solutions.
        </p>

        <p className="about-description">
          My interests include ESP32/Arduino development, Embedded Systems
          Programming, PC Hardware, Automation, and PCB Design. I also enjoy
          creating polished user experiences and learning modern development
          tools. In addition to my hardware skills, I spend my free time
          learning web development and software programming to expand my skill
          set and create more comprehensive projects.
        </p>
      </section>
    </main>
  );
}

export default App;
