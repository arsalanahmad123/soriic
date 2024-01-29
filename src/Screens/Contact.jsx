import React, { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formParams = {
      from_name: name,
      from_email: email,
      to_name: "Soriic",
      subject: subject,
      message: message,
    };

    if (!name || !email || !message || !phone || !subject) {
      alert("Please fill all the fields");
      return;
    }
    const handleEmail = () => {
      emailjs
        .send(serviceId, templateId, formParams, publicKey)
        .then((res) => {
          console.log(res);
          alert("Your message has been sent successfully");
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setSubject("");
        })
        .catch((err) => console.log(err));
    };

    if (name && email && message && phone && subject) {
      handleEmail();
    }
  };

  return (
    <section
      className="w-full bg-soriic  
    "
    >
      <div className="flex flex-col justify-start items-start lg:py-16 xl:flex-row">
        <div className="flex flex-col justify-start gap-y-5 px-10 pb-8 xl:py-20 py-10 md:w-full">
          <span className="text-mainColor font-medium mb-3">
            Contact With Us
          </span>
          <h1 className="text-textColor text-4xl md:text-5xl lg:text-6xl font-extrabold ">
            Feel Free To Get In Touch
          </h1>
          <div className="flex flex-row pt-5 justify-start items-center gap-x-3">
            <div className="p-4 rounded-full border-6 border-textColor shadow-2xl text-textColor">
              <MdOutlinePhoneInTalk size={35} />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 text-[14px]">Call Anytime</span>
              <a
                href="tel:+923051678268"
                className="font-catamaran font-semibold hover:text-mainColor text-lg text-textColor transition-all duration-500"
              >
                {" "}
                +923051678268
              </a>
            </div>
          </div>
          <div className="flex flex-row pt-5 justify-start items-center gap-x-3">
            <div className="p-4 rounded-full border-6 border-textColor shadow-2xl text-textColor">
              <MdMarkEmailUnread size={35} />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 text-[14px]">Send Email</span>
              <a
                href="mailto:sorric@gmail.com"
                className="font-catamaran font-semibold hover:text-mainColor text-lg text-textColor transition-all duration-500"
              >
                {" "}
                sorric@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-row pt-5 justify-start items-center gap-x-3">
            <div className="p-4 rounded-full border-6 border-textColor shadow-2xl text-textColor">
              <GrMapLocation size={35} />
            </div>
            <div className="flex flex-col ">
              <span className="text-gray-700 text-[14px]">Visit Now</span>
              <a className="font-catamaran font-semibold hover:text-mainColor text-lg text-textColor transition-all duration-500">
                {" "}
                6c Fatima Jinnah Rd,Satellite Town, Sargodha, Punjab , Pakistan
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-t from-gray-200 to-gray-100 w-full md:p-10 p-2 xl:min-h-[100vh]">
          <form onSubmit={handleSubmit} className="pt-10 px-3">
            <div className="mb-2 md:mb-3 xl:mb-5">
              <input
                type="text"
                className="p-2 text-lg w-full rounded-sm focus:outline-1 focus:outline-textColor pl-4"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2 md:mb-3 xl:mb-5">
              <input
                type="email"
                className="p-2 text-lg w-full rounded-sm focus:outline-1 focus:outline-textColor pl-4"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2 md:mb-3 xl:mb-5">
              <input
                type="tel"
                className="p-2 text-lg w-full rounded-sm focus:outline-1 focus:outline-textColor pl-4"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-2 md:mb-3 xl:mb-5">
              <input
                type="text"
                className="p-2 text-lg w-full rounded-sm focus:outline-1 focus:outline-textColor pl-4"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-2  md:mb-3 xl:mb-5">
              <textarea
                type="text"
                className="p-2 text-lg w-full rounded-sm focus:outline-1 focus:outline-textColor pl-4"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2  text-lg  rounded-sm bg-textColor text-white border border-white hover:bg-white hover:text-textColor transition-all duration-500 md:mt-3 lg:mt-4 xl:mt-5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row px-10 md:px-10 py-10 gap-y-5 justify-center items-start overflow-x-hidden shadow-2xl m-20">
        <div className="flex flex-col">
          <span className="text-sm text-mainColor mb-2">Let's Get Started</span>
          <h1 className="text-4xl text-textColor font-bold md:text-5xl lg:text-6xl">
            World class IT solutions partner of choice
          </h1>
        </div>
        <div className="overflow-x-hidden h-[450px] w-[350px] md:w-[700px] rounded-2xl lg:w-[900px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.4124086857555!2d72.68371547471922!3d32.08513787396045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177f89cb6a3f5%3A0x21b672d8bab21f2a!2sSoriic%20Software%20%26%20Tech%20Company!5e0!3m2!1sen!2s!4v1706526396897!5m2!1sen!2s"
            className="shadow-xl"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}

export default Contact;
