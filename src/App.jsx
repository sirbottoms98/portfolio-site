import "./App.css";

function App() {
  return (
      <main className="landing-page">
          <section className="construction-banner">
            <div className="construction-overlay">
              <p className="construction-text">
                This site is currently under construction. Check back soon for updates!
              </p>
            </div>
          </section>

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
              I am a computer engineering student focused on embedded systems,
              software development, electronics, and practical problem-solving.
            </p>

            <p className="about-description">
              <p>
                I enjoy building projects that combine hardware and software, from
                ESP32 and Arduino development to PC hardware, automation, and PCB
                design. I am also expanding my web development skills to create more
                polished, complete engineering projects.
              </p>{" "}
              <p>
                Outside of engineering projects, I enjoy building and maintaining
                heavily modded game environments and playing complex systems-driven
                games such as Modded Minecraft, Satisfactory, Factorio, Modded
                Skyrim, and Star Citizen. These experiences have strengthened my
                troubleshooting, optimization, and systems-thinking skills.
              </p>
            </p>
          </section>
      </main>
  );
}

export default App;
