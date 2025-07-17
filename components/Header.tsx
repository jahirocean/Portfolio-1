"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIALS } from "@/constants/socials";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-sky-400">
              YourName
            </Link>
          </motion.div>
        ) : (
          <Link href="/" className="text-2xl font-bold text-sky-400">
            YourName
          </Link>
        )}

        <nav className="hidden md:flex items-center gap-8">
          {["about", "projects", "skills", "contact"].map((item, index) => (
            mounted ? (
              <motion.div
                key={item}
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
            ) : (
              <Link
                key={item}
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
              <motion.a
                key={social.name}
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
            ) : (
              <a
                key={social.name}
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