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
    <div className="py-12">
      <section className="w-[70vw] lg:w-fit rounded-2xl mx-auto flex gap-5 lg:gap-10 justify-center shadow-2xl flex-wrap">
        {stats.map((item, index) => (
          <div className="flex gap-6 lg:gap-2 items-center" key={index}>
            <p className="text-4xl font-bold">
              <CountUp end={item.number} duration={5} />+
            </p>
            <p className="max-w-32 leading-none text-xl lg:whitespace-normal whitespace-nowrap md:whitespace-normal">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SocialProof;
