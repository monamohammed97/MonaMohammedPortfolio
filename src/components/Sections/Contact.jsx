import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const headerData = {
  name: "Mona Mohammed",
  designation: "Web Developer",
  imageThumb: "/images/logo.png",
  social: {
    facebook: "https://www.facebook.com/monamohammedshaban97/",
    twitter: "https://twitter.com/moona97mohammed",
    instagram: "https://www.instagram.com/mona_mohammed_97/",
    linkedin: "https://www.linkedin.com/in/monamohammed1997/",
  },
};
const contactData = {
  phone: ["+970 599 923 814"],
  email: ["mona00mona1997@gmail.com"],
  location: "Palestine, Gaza, Rafah",
};

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();
  const submitHandler = (event) => {
  event.preventDefault();

  if (!formdata.name) {
    setError(true);
    setMessage("Name is required");
  } else if (!formdata.email) {
    setError(true);
    setMessage("Email is required");
  } else if (!formdata.subject) {
    setError(true);
    setMessage("Subject is required");
  } else if (!formdata.message) {
    setError(true);
    setMessage("Message is required");
  } else {
    setError(false);
    emailjs
      .sendForm(
        "service_063we7t",
        "template_mkx7gn3",
        form.current,
        "3dx8YeaOh6nkop5dF"
      )
      .then(() => {
        setMessage("Your message has been sent!!!");
        setFormdata({ name: "", email: "", subject: "", message: "" }); // تفريغ الحقول بعد الإرسال
      })
      .catch((error) => {
        setError(true);
        setMessage("Failed to send message. Please try again.");
      });
  }
};

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info fadeIn delay_ms_3 mb-3 mb-md-5">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>Phone</h5>
            {contactData.phone.map((singlePhone, index) => (
              <span key={index}>{singlePhone}</span>
            ))}
          </div>
        </div>
        <div className="contact-info fadeIn delay_ms_5 mb-3 mb-md-5">
          <i className="icon-envelope"></i>
          <div className="details">
            <h5>Email address</h5>
            {contactData.email.map((singleEmail, index) => (
              <span key={index}>{singleEmail}</span>
            ))}
          </div>
        </div>
        <div className="contact-info fadeIn delay_ms_7">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Location</h5>
            <span>{contactData.location}</span>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <form className="contact-form" ref={form} onSubmit={submitHandler}>
          <div className="row">
            <div className="column col-md-6 fadeIn delay_ms_3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  value={formdata.name}
                />
              </div>
            </div>

            <div className="column col-md-6 fadeIn delay_ms_3">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formdata.email}
                />
              </div>
            </div>

            <div className="column col-md-12 fadeIn delay_ms_5">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  value={formdata.subject}
                />
              </div>
            </div>

            <div className="column col-md-12 fadeIn delay_ms_7">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formdata.message}
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default fadeIn delay_ms_9"
          >
            <i className="icon-paper-plane"></i>Send Message
          </button>
        </form>
        {handleAlerts()}
      </div>
      <div className="footer mt-auto d-block d-lg-none">
        <ul className="social-icons list-inline">
          {!headerData.social.facebook ? null : (
            <li className="list-inline-item">
              <a href={headerData.social.facebook}>
                <FaFacebookF />
              </a>
            </li>
          )}
          {!headerData.social.twitter ? null : (
            <li className="list-inline-item">
              <a href={headerData.social.twitter}>
                <FaTwitter />
              </a>
            </li>
          )}
          {!headerData.social.instagram ? null : (
            <li className="list-inline-item">
              <a href={headerData.social.instagram}>
                <FaInstagram />
              </a>
            </li>
          )}
          {!headerData.social.linkedin ? null : (
            <li className="list-inline-item">
              <a href={headerData.social.linkedin}>
                <FaLinkedinIn />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
