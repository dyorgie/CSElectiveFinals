import "./Contact.css";
import contactCover from "../images/contact-cover.png";
import { addReview } from "../services/reviewService";
import { useRef } from "react";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    addReview(review);
  };

  return (
    <>
      <img
        src={contactCover}
        alt="contact cover"
        className="contact-cover"
      ></img>
      <div className="contact-content">
        <h1>Contact us!</h1>
      </div>
      <div className="contact-container"></div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label className="nameLabel">Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
            ref={nameRef}
          ></input>
        </div>

        <div className="input-box">
          <label className="emailLabel">Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email address"
            required
            ref={emailRef}
          ></input>
        </div>

        <div className="input-box">
          <label className="emailLabel">Your Message</label>
          <textarea
            name=""
            id=""
            className="fieldMessage"
            placeholder="Enter your message"
            required
            ref={messageRef}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
}
