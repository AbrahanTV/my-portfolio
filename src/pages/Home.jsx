import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="container mt-5 secondary-text">
        <p className="fs-1 ">
          Hi, I'm <span className="text-white">Abrahan</span> <br />a{" "}
          <span className="text-white">Web Developer</span>
        </p>
        <p>Computer Science Student • Full Stack Enthusiast</p>
        <div className="buttons d-flex gap-3">
          <a href="#projects" className="btn button-bg text-white fw-bold">
            View My Work
          </a>
          <a href="#footer" className="btn contact-btn text-white ">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="container  my-5 p-5 card-bg rounded">
        <p className="h2">About Me</p>
        <p className="">
          I am a Computer Science specializing in Web Development. <br />I have
          experience in both frontend and backend development.
          <br />
          <br />I enjoy building web applications and learning new technologies
        </p>
      </div>
      <Projects />
    </>
  );
};

export default Home;
