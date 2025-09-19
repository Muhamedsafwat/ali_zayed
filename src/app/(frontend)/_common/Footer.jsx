import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-gradient-to-t from-purple-700/10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="relative justify-center z-20 mr-4 font-mono flex items-center px-2 py-1 text-3xl mb-5 font-semibold text-white"
        >
          Ali Zayed
        </Link>
        <ul className="flex flex-wrap justify-center items-center mb-2 text-gray-900 dark:text-white border-b pb-3 border-neutral-600">
          {links.map((item, index) => (
            <li key={`footer_link_${index}`}>
              <Link href={item.href} className="mr-4 hover:underline md:mr-6 ">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025. All Rights Reserved. Developed by{" "}
          <a
            target="_blank"
            href="https://byteforceinc.com/codex"
            className="bg-gradient-to-r from-purple-400 to-cyan-600 text-transparent bg-clip-text hover:underline"
          >
            CodeX
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Get In Touch", href: "/contact" },
  { label: "Portfolio", href: "/portfolio" },
];
