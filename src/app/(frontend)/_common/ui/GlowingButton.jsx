import React from "react";
import Link from "next/link";

const GlowingButton = ({ href, variant, children, className }) => {
  return (
    <Link
      href={href || "#"}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-lg shadow-purple-400/30 ${variant == "secondary" && "border-purple-500 border"} ${className}`}
    >
      {variant != "secondary" && (
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      )}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${variant == "secondary" ? "bg-transparent" : "bg-slate-950"} px-8 py-1 text-sm font-medium text-white backdrop-blur-md`}
      >
        {children}
      </span>
    </Link>
  );
};

export default GlowingButton;
