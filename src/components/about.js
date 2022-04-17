import { Link } from "react-router-dom";
import Metas from "./metas";
const About = () => {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <p>
        Hello, good people! Welcome to the official website of Mohammadpur
        Preparatory School And College Robotics Club! We’ve founded this
        Robotics Club on 1/2/2021 intending to spread the idea of ​​Robotics to
        the young generation and the concept of Robotics in the society through
        various workshops. At present there are a large number of students under
        this club which is increasing day by day and this club which is open to
        all is constantly being improved and progressive by taking valuable
        suggestions from everyone.
      </p>
      <p>
        Why do you or I need robotics or robotics club? Or what are the benefits
        of joining our club? We will all get to know about robotics in different
        ways by providing different workshops in this club and there will be
        several fests including Robotic fairs and competitions to help us put it
        into practice which will help us gain real experience in robotics.
      </p>
      <p>
        Moreover, all our panel members will always be by your side at any time
        and during any work. Our mpscrc will always be by your side to make your
        robotics skills more advanced and practical.
      </p>
      <br />
      <br />
      <img width="150" src={require("../img/VISION.png")} alt="" srcset="" />
      <h3>Our Vision</h3>
      <p>
        Our vision is simple. We want to inspire the younger generation to
        explore the beauty of Robotics. We want to be the gateway through which
        the younger generation steps foot into the magical realm of Robotics
        where opportunities are infinite and satisfaction is at its peak. We
        want them to explore this field because the future will be revolved
        around astonishing Robots that will ease the burden on humanity.
      </p>
      <div className="about-buttons">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe9FMjQywhOWz-FqOOKRJeoB8fl2-kgMzHTYcDV3oioA6Ti4w/viewform?usp=sf_link"
          rel="noreferrer"
          target="_blank"
        >
          Join Us
        </a>
        <Link to="/about/panel-members">Panel Members</Link>
        <Link to="/donate">Donate Us</Link>
      </div>

      <Metas
        title={"About Us - MPSC Robotics Club"}
        description={
          "Our vision is simple. We want to inspire the younger generation to explore the beauty of Robotics. We want to be the gateway through which the younger generation steps foot into the magical realm of Robotics where opportunities are infinite and satisfaction is at its peak. We want them to explore this field because the future will be revolved around astonishing Robots that will ease the burden on humanity."
        }
      />
    </div>
  );
};

export default About;
