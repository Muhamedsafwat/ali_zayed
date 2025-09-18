import React from "react";
import { Form } from "./Form";
const Contact = () => {
  return (
    <section className="relative z-30 py-12">
      <div className="max-w-6xl mx-auto ">
        <div className="grid lg:grid-cols-2 items-center gap-14 p-8 md:p-0 font-[sans-serif]">
          <div>
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <p className="text text-lg text-gray-300 mt-4 leading-relaxed">
              Have questions, feedback, or inquiries? Fill out the form below to
              get in touch with us. Our team is here to assist you and will get
              back to you as soon as possible. Alternatively, you can reach out
              to us directly via phone or email. We look forward to hearing from
              you!
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
