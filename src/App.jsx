import Parallax from "./components/parallax/Parallax";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";

import Projects from "./components/Projects/Projects";
import Cursor from "./components/cursor/Cursor";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div className="main-container">
      <div className="appWrapper">
        <Cursor />
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Skills">
          <Slider />
        </section>
        <section id="Projects" type="Projects">
        <Parallax type="Projects" />  
      </section> 
        <section id="Projects">
          <Projects />
        </section>
      </div>
    </div>
  );
};

export default App;
