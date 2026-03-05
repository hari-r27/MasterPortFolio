import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdPhone, MdEmail } from "react-icons/md";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Message Sent Successfully 🚀");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }
  };

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white w-[60%] rounded-[1.5rem] absolute right-[1rem] bottom-[1rem] top-[1rem] p-[2rem] flex flex-col gap-[2rem]"
    >

      {/* Title */}
      <h2 className="font-h3">Contact Me</h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-2 gap-[1rem]">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#ffe9cf] p-[1.2rem] rounded-[1rem] flex items-center gap-[0.8rem]"
        >
          <MdPhone className="text-[24px] text-orange-500" />
          <div>
            <h3 className="font-h5">Phone</h3>
            <p className="text-gray-600 font-inner-text">
              +91 8248904080
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#f2f7fb] p-[1.2rem] rounded-[1rem] flex items-center gap-[0.8rem]"
        >
          <MdEmail className="text-[24px] text-orange-500" />
          <div>
            <h3 className="font-h5">Email</h3>
            <p className="text-gray-600 font-inner-text">
              hariselamuthu@gmail.com
            </p>
          </div>
        </motion.div>

      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[1rem]"
      >

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-[0.8rem] rounded-[0.6rem] focus:border-orange-400 outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-[2px]">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-[0.8rem] rounded-[0.6rem] focus:border-orange-400 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-[2px]">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full border p-[0.8rem] rounded-[0.6rem] focus:border-orange-400 outline-none resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-[2px]">
              {errors.message}
            </p>
          )}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-red-500
          text-white px-[1.5rem] py-[0.8rem] rounded-[0.6rem] w-fit"
        >
          Send Message
        </motion.button>

      </form>

    </motion.div>
  );
}

export default Contact;