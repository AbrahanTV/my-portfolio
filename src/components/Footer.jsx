import { useRef } from "react";
const Footer = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const url =
        import.meta.env.MODE === "development"
          ? "http://localhost:5000/api/contact"
          : "https://apiabrahantolentinocom.vercel.app/api/contact";

      console.log("Submitting to:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Form submitted successfully:", data);
      e.target.reset(); // el form se resetea despues de mandarse -A
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <>
      <footer
        id="footer"
        className="bg-gray d-flex justify-content-between flex-wrap p-5"
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

        <form className="form" onSubmit={submitForm}>
          <h1 className="heading text-white">Send me a Message</h1>
          <div className="name-cont">
            <label htmlFor="name" className="form-label fs-4 text-white">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Type your name"
            />
            <label htmlFor="email" className="form-label fs-4 text-white">
              E-mail
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Type your email"
            />
          </div>
          <label htmlFor="message" className="form-label fs-4 text-white">
            Message
          </label>
          <textarea
            ref={messageRef}
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
      {/*  */}
    </>
  );
};

export default Footer;
