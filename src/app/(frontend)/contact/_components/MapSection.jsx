import React from "react";

const MapSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-20 bg-black rounded-t-3xl flex justify-between text-white">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 aspect-square w-3 rounded-full" />
          <p className="tracking-widest">Our space</p>
        </div>
        <h2 className="mt-8 text-5xl tracking-wider leading-[1.1]">
          Where you can <br /> find us ?
        </h2>
        <p className="mt-10 text-lg">
          Our location offers a convenient and welcoming space for visitors and
          clients alike have to say
        </p>
      </div>
      <div className="flex-1 h-[25rem] rounded-xl overflow-hidden border-2 border-blue-700 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3767907698834!2d31.48534837557509!3d30.595133774650925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf950d44b3e624e9%3A0x3ecd9fb19e8b9689!2sByteforce!5e0!3m2!1sen!2seg!4v1754505136694!5m2!1sen!2seg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale invert-[.9] contrast-150"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
