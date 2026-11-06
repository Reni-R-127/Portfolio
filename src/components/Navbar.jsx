
import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Technologies", "#technologies"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">
        RENI <span>R.</span>
      </a>

      <button
        className="navbar-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "navbar-links active" : "navbar-links"}>
        {links.map(([name, href]) => (
          <a key={name} href={href} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
      </nav>

      <a href="#contact" className="navbar-contact">
        Let's Connect <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
