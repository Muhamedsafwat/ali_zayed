"use client";
import CountUp from "react-countup";

const SocialProof = () => {
  const stats = [
    {
      number: 5,
      text: "Years in Market",
    },
    {
      number: 8,
      text: "Countries Served",
    },
    {
      number: 100,
      text: "Satisfied clients",
    },
    {
      number: 1500,
      text: "Videos Produced",
    },
  ];

  return (
    <section className="w-[70vw] lg:w-fit bg-black border-2 border-blue-900 p-10 rounded-2xl translate-y-[-2rem] mx-auto flex gap-5 lg:gap-10 justify-center shadow-2xl shadow-blue-500/30 flex-wrap  ">
      {stats.map((item, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <p className="text-4xl font-bold">
            <CountUp end={item.number} duration={5} />+
          </p>
          <p className="max-w-32 leading-none text-xl">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default SocialProof;
