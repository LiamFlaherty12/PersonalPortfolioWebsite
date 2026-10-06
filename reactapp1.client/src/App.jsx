
import './App.css';

function App() {
    return (
        <div>
            <nav>
                <h2>Liam Flaherty</h2>

                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>

            <main>
                <section>
                    <h1>Hi, I'm Liam.</h1>
                    <h2>I'm a software engineer and web developer.</h2>
                    <p>Welcome to my personal website! Here you can learn more about me, see some of my projects, and get in touch.</p>

                </section>

                <section id="projects">
                    <h2>Projects</h2>
                    <div className="project">
                        <h3>Project 1</h3>
                        <p>Description of project 1.</p>
                    </div>
                    <div className="project">
                        <h3>Project 2</h3>
                        <p>Description of project 2.</p>
                    </div>
            </main>


        </div>
   )
}

export default App;