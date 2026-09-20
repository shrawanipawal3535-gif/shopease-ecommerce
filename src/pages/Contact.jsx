import { useState } from "react";

import { useToast } from "../context/ToastContext";

import "./Contact.css";

function Contact() {
  const { showToast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    showToast("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <div className="contact-header">

        <h1>Contact Us 📞</h1>

        <p>
          Have a question? We'd love to hear from you.
        </p>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          required
        />

        <textarea
          placeholder="Your Message"
          rows="6"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;