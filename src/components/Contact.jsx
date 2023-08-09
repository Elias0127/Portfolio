import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all the fields before sending.");
      return; // Exit out of the function
    }
    setLoading(true);

    // iGAKmgYYTbu-C7Km_
    //  template_uyxhrdf
    // service_7i99vn9
    emailjs
      .send(
        'service_7i99vn9',
        'template_uyxhrdf',
        {
          from_name: form.name,
          to_name: "Elias Woldie",
          from_email: form.email,
          to_email: "eliasmekonen001@gmail.com",
          message: form.message,
        },
        'iGAKmgYYTbu-C7Km_'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-gradient-to-t from-[rgb(17, 24, 39)] to-[rgb(75, 85, 99)] border-2 border-[#606e82] shadow-lg p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className='bg-gradient-to-t from-[rgb(17, 24, 39)] to-[rgb(75, 85, 99)] shadow-lg py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className='bg-gradient-to-t from-[rgb(17, 24, 39)] to-[rgb(75, 85, 99)] shadow-lg py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your Message'
              className='bg-gradient-to-t from-[rgb(17, 24, 39)] to-[rgb(75, 85, 99)] shadow-lg py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-gradient-to-r from-[rgb(17, 24, 39)] to-[rgb(75, 85, 99)] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gradient-to-r hover:from-[rgb(10, 15, 30)] hover:to-[rgb(45, 55, 72)]'
          >
            {loading ? "Sending..." : "Send"}
          </button>


        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");