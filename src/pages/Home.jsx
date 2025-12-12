import Projects from "../components/Projects";
import SplitText from "../components/SplitText.jsx";
import RotatingText from "../components/RotatingText.jsx";

const Home = () => {
  return (
    <>
      <style>
        {`
          .titulo {
            font-size: 3.3rem;
          }

          .hero {
            height: 100vh;
          }
        `}
      </style>

      <div className="hero container col-md-6 mt-5 d-flex flex-column align-items-center justify-content-center text-center secondary-text">
        <SplitText
          text="Hello, I'm Abrahan"
          className="text-2xl font-semibold text-center titulo heading"
          delay={10}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />

        <div className="d-flex align-items-center gap-2">
          <RotatingText
            texts={[
              "Web developer",
              "Computer Science Student",
              "Full Stack Enthusiast",
            ]}
            mainClassName="titulo  text-rotate px-2 sm:px-2 md:px-3 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <div className="buttons d-flex mt-4 gap-3">
          <a href="#projects" className="btn button-bg text-white fw-bold">
            View My Work
          </a>
          <a href="#footer" className="btn contact-btn text-white ">
            Get In Touch
          </a>
        </div>

        <div className="container w-75 my-5 p-5 card-bg rounded-4 text-black">
          <p className="h1 heading">About Me</p>
          <p className="body-text fs-5">
            I am a Computer Science student specializing in Web Development.{" "}
            <br />I have experience in both frontend and backend development.
            <br />
            <br />I enjoy building web applications and learning new
            technologies
          </p>
        </div>
      </div>

      <section id="projects" className="">
        <Projects />
      </section>
    </>
  );
};

export default Home;
