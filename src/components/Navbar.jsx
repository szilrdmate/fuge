import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
            <p onClick={goTop}>FÜGE</p>
          </Link>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default About;