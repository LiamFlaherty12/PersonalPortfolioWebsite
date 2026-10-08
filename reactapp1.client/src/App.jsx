
import "./App.css";

const projects = [
    {
        title: "Ray Tracer",
        description:
            "A C++ ray tracing project exploring 3D graphics, vectors, rays, and rendering pixels.",
        tech: ["C++", "Computer Graphics"],
        link: "https://github.com/YOUR_USERNAME/YOUR_REPO",
    },
    {
        title: "Personal Portfolio",
        description:
            "A personal website showcasing my projects, technical skills, and development journey.",
        tech: ["React", "ASP.NET"],
        link: "https://github.com/YOUR_USERNAME/YOUR_REPO",
    },
];

function App() {
    return (
        <div className="app">
            <header className="navbar">
                <a className="logo" href="#home">
                    dev<span>.</span>
                </a>

                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main>
                <section className="hero" id="home">
                    <p className="eyebrow">
                        ASPIRING SOFTWARE DEVELOPER
                    </p>

                    <h1>
                        Turning ideas into
                        <br />
                        <span>working software.</span>
                    </h1>

                    <p className="hero-description">
                        I'm a computer science graduate passionate about
                        programming, problem-solving, and building useful
                        applications.
                    </p>

                    <div className="hero-buttons">
                        <a className="button primary" href="#projects">
                            Explore my work ↗
                        </a>

                        <a
                            className="button secondary"
                            href="https://github.com/LiamFlaherty12"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>
                    </div>

                    <p className="location">
                        <span className="status-dot"></span>
                        Open to software development opportunities
                    </p>
                </section>

                <section className="section" id="about">
                    <p className="eyebrow">A LITTLE ABOUT ME</p>
                    <h2>Learning by doing.</h2>
                    <p className="section-description">
                        I enjoy understanding how software works under the
                        hood, from data structures and algorithms to
                        full-stack web development. I use personal projects
                        to turn what I learn into practical experience.
                    </p>
                </section>

                <section className="section" id="projects">
                    <p className="eyebrow">MY WORK</p>
                    <h2>Featured projects.</h2>

                    <div className="project-grid">
                        {projects.map((project) => (
                            <article className="project-card" key={project.title}>
                                <div className="project-icon">&lt;/&gt;</div>

                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="tech-list">
                                    {project.tech.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <a
                                    className="project-link"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View source code ↗
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section" id="skills">
                    <p className="eyebrow">TECHNICAL SKILLS</p>
                    <h2>Tools I work with.</h2>

                    <div className="skills-list">
                        {["C++", "C#", "JavaScript", "React", "ASP.NET",
                            "Git", "HTML", "CSS", "SQL"].map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                    </div>
                </section>

                <section className="contact-section" id="contact">
                    <p className="eyebrow">GET IN TOUCH</p>
                    <h2>Let's build something.</h2>
                    <p>
                        I'm interested in junior software developer and
                        web development opportunities.
                    </p>

                    <a className="button primary" href="mailto:lflaherty80@gmail.com">
                        Email me ↗
                    </a>
                </section>
            </main>

            <footer>
                <p>© {new Date().getFullYear()} Your Name</p>
                <a href="#home">Back to top ↑</a>
            </footer>
        </div>
    );
}

export default App;
