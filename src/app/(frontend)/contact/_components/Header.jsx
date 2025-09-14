"use client";
import React from "react";
import { WavyBackground } from "@/app/(frontend)/_common/ui/wavy-background";

export function Header() {
  return (
    <div className="w-screen overflow-x-hidden ">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Get in touch
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of your business by letting us handle all the tech
          stuff
        </p>
      </WavyBackground>
    </div>
  );
}
