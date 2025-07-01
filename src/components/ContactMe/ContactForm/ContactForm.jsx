// import React from "react";
// import "./ContactForm.css";
// const ContactForm = () => {
//   return (
//     <div className="contact-form-content">
//       <form>
//         <div className="name-container">
//           <input type="text" name="firstname" placeholder="First Name" />
//           <input type="text" name="lastname" placeholder="Last Name" />
//         </div>
//         <input type="text" name="email" placeholder="Email" />
//         <textarea
//           type="text"
//           name="message"
//           placeholder="Message"
//           rows={5}
//         ></textarea>
//         <button>SEND</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your Google Form URL
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe7glt2b2aefn9-FLba5a60GHaDQK50pAEGf8s1MmyjOgRhFw/viewform?usp=header";

    // Map your form fields to Google Form field IDs
    // You'll need to inspect your Google Form to get these IDs
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.123456789", formData.firstname); // First Name field ID
    formDataToSubmit.append("entry.987654321", formData.lastname); // Last Name field ID
    formDataToSubmit.append("entry.192837465", formData.email); // Email field ID
    formDataToSubmit.append("entry.564738291", formData.message); // Message field ID

    try {
      const response = await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors", // Google Forms requires no-cors mode
        body: formDataToSubmit,
      });

      // Note: Due to no-cors mode, you won't get a response, but it should work
      alert("Message sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
