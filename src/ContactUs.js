import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          For any inquiries or assistance, please feel free to reach out to us.
        </p>
        <p>Email: lpulibrary@gmail.com</p>
        <p>Phone: 9026278003</p>
        <p>Address: Lovely Professional University,Jalandhar,India</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send a Message</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;