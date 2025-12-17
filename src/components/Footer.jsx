const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-gray d-flex justify-content-between flex-wrap p-3"
      >
        <div className="contacts d-flex flex-column gap-4">
          <h1 className="heading text-white">Contacts</h1>
          <a
            href="mailto:abrahantolentinov@gmail.com"
            className="body-text text-white text-decoration-none fs-3 "
          >
            abrahantolentinov@gmail.com
          </a>
          <a
            href="tel+:9174027230"
            className="body-text text-white text-decoration-none fs-3 fw-"
          >
            917-402-7230
          </a>
        </div>

        <form className="form">
          <h1 className="heading text-white">Send me a Message</h1>
          <label htmlFor="email" className="form-label fs-4 text-white">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Type your email"
          />
          <label htmlFor="message" className="form-label fs-4 text-white">
            Message
          </label>
          <textarea
            name="message"
            id=""
            className="form-control"
            placeholder="Send me a message"
          ></textarea>
          <button type="submit" className="submit-btn btn text-white mt-3">
            Send
          </button>
        </form>
      </footer>
    </>
  );
};

export default Footer;
