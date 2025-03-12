import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
  const [isSubmitting, setIsSubmitting] = useState(false); // لتعطيل الزر أثناء الإرسال
  const form = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formdata.name || !formdata.email || !formdata.subject || !formdata.message) {
      setError(true);
      setMessage("All fields are required");
      return;
    }

    setError(false);
    setIsSubmitting(true); // تعطيل الزر أثناء الإرسال

    try {
      await emailjs.sendForm(
        "service_063we7t",
        "template_mkx7gn3",
        form.current,
        "3dx8YeaOh6nkop5dF"
      );
      setMessage("Your message has been sent!");
      setFormdata({ name: "", email: "", subject: "", message: "" }); // مسح الحقول بعد الإرسال
    } catch (error) {
      setError(true);
      setMessage("Failed to send message. Please try again.");
    }

    setIsSubmitting(false); // إعادة تفعيل الزر بعد الإرسال
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>Phone</h5>
            {contactData.phone.map((singlePhone, index) => (
              <span key={index}>{singlePhone}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <form className="contact-form" ref={form} onSubmit={submitHandler}>
          <input type="text" name="name" placeholder="Your name" onChange={handleChange} value={formdata.name} />
          <input type="email" name="email" placeholder="Email address" onChange={handleChange} value={formdata.email} />
          <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={formdata.subject} />
          <textarea name="message" placeholder="Message" onChange={handleChange} value={formdata.message}></textarea>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {message && <div className={error ? "alert alert-danger" : "alert alert-success"}>{message}</div>}
      </div>
    </div>
  );
}

export default Contact;
