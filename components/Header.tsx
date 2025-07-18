"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIALS } from "@/constants/socials";
import { useEffect, useState } from "react";
import ClientSideOnly from "./ClientSideOnly";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {mounted ? (
          <ClientSideOnly key="logo-animation">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold text-sky-400">
                Jahir Raihan
              </Link>
            </motion.div>
          </ClientSideOnly>
        ) : (
          <Link href="/" className="text-2xl font-bold text-sky-400">
            Jahir Raihan
          </Link>
        )}

        <nav className="hidden md:flex items-center gap-8">
          {["about", "projects", "skills", "contact"].map((item, index) => (
            mounted ? (
              <ClientSideOnly key={`nav-${item}`}>
                <motion.div
                  key={`nav-motion-${item}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors capitalize"
                  >
                    {item}
                  </Link>
                </motion.div>
              </ClientSideOnly>
            ) : (
              <Link
                key={`nav-link-${item}`}
                href={`#${item}`}
                className="text-slate-300 hover:text-sky-400 transition-colors capitalize"
              >
                {item}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {SOCIALS.map((social, index) => (
            mounted ? (
              <ClientSideOnly key={`social-${social.name}`}>
                <motion.a
                  key={`social-motion-${social.name}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              </ClientSideOnly>
            ) : (
              <a
                key={`social-link-${social.name}`}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-sky-400 transition-colors"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            )
          ))}
        </div>
      </div>
    </header>
  );
}