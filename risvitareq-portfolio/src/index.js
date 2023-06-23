import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};

/***********************
    Nav Component
   ***********************/

const Nav = (props) => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Risvi
            <strong> Tareq</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

/***********************
    Header Component
   ***********************/

const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="silhouette" />
      <div className="forest" />
      <div className="moon" />
      <div className="container">
        <h1>
          {/* <span className="line">I do</span> */}
          <span className="line">Full Stack </span>
          <span className="line">
            <span className="color">Web-Developer</span>
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

/***********************
    About Component
   ***********************/

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>ABOUT ME</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Risvi Tareq.</h4>
            <p>I am a Full Stack Developer based in San Diego, California.</p>
            <p>
              I am currently the webmaster for Clear Blue Sea, a non-profit organization. I also produced music profesionally. I have amassed over 40,000,00 streams collectively through all the songs I have produced. I have marketed my beats on the internet as a
              side hustle and make money from music royalties. I get bored of making music sometimes, so I looked to web development to apply my creativity in a more challenging avenue.
              videos on YouTube.
            </p>
          </div>
          <div className="title">
            <h3>SKILLS</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Hard Skills</h4>
            <ul>
              <li>Full-Stack Websites</li>
              <li>Wordpress Websites</li>
              <li>REST APIs</li>
              <li>AGILE Development</li>
              <li>Graphic Design</li>
              <li>convert eFiles in adherence to IRS XML Standardization rules
              </li>
            </ul>
          </div>
          <div className="desc">
            <h4 className="subtitle">Tech Stack</h4>
            <ul>
              <li>HTML/CSS</li>
              <li>Wordpress</li>
              <li>XML</li>
              <li>VS Code</li>
              <li>Javascript</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>GraphQL</li>
              <li>Git</li>
              <li>Adobe Photoshop</li>
              <li>GIMP</li>
              <li>Bazaart</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

/***********************
    Project Component
   ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return (
    <div className="project">
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={props.img}
          alt={"Screenshot of " + props.title}
        />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(" ").map((t) => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{" "}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

/***********************
    Projects Component
   ***********************/

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Work</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of my best personal projects and professional work I have done.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="CodeCollab"
            img={
              "https://github.com/ivsir/RisviTareqPortfolio/blob/master/risvitareq-portfolio/src/Images/cc.png?raw=true"
            }
            tech="js css react node"
            link="https://code-collab-dallas.herokuapp.com/"
            repo="https://github.com/DallasSybrowsky/CodeCollab"
          >
            <small>
              Built using Node, Express, MongoDB, CSS + Bulma, React.js and
              React Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users read
              and post anonymous messages and replies.
            </p>
          </Project>
          <Project
            title="Clear Blue Sea"
            img={
              "https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg"
            }
            tech="js node css"
            link="https://yagoestevez-stock-price-checker.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-stock-price-checker"
          >
            <small>
              Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS +
              Bootstrap and Pug.
            </small>
            <p>
              Another full-stack website to check the current value of any
              requested stock in the market.
            </p>
          </Project>
          <Project
            title="Bibliomania"
            img={
              "https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/PersonalLibrary.jpg"
            }
            tech="js node css"
            link="https://yagoestevez-personal-library.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-personal-library"
          >
            <small>
              Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap
              and Pug.
            </small>
            <p>
              A full-stack website to store book titles and comments to each
              book into a remote database.
            </p>
          </Project>
          <Project
            title="Power Quiz"
            img={
              "https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/IssueTracker.jpg"
            }
            tech="js node css"
            link="https://yagoestevez-issue-tracker.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-issue-tracker"
          >
            <small>
              Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap
              and Pug.
            </small>
            <p>
              Yet another full-stack app to save and manage technical issues to
              be fixed.
            </p>
          </Project>
          <Project
            title="A Night In"
            img={
              "https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/MetricImperialConverter.jpg"
            }
            tech="js node css"
            link="https://yagoestevez-metric-imperial-converter.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-metric-imperial-converter/"
          >
            <small>
              Built using Node, Express, JS + jQuery, CSS + Bootstrap and Pug.
            </small>
            <p>
              Another full-stack for converting values from the Internation
              System of Units (Metric) into the imperial units.
            </p>
          </Project>
        
        </div>
      </div>
    </section>
  );
};

/***********************
    Contact Component
   ***********************/

const Contact = (props) => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {""}
              <span className="mail">
                risvi.tareq@clearbluesea.com
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

/***********************
    Footer Component
   ***********************/

const Footer = (props) => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Risvi Tareq</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

/***********************
    Social Links Component
   ***********************/

const SocialLinks = (props) => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/yagoestevez"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {" "}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/ivsir"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {" "}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://codepen.io/yagoestevez"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Codepen Profile"
      >
        {" "}
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};

/***********************
    Main Component
   ***********************/

class App extends React.Component {
  state = {
    menuState: false,
  };

  toggleMenu = () => {
    this.setState((state) => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
        ? "active"
        : "deactive",
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
