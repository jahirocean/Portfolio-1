"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIALS } from "@/constants/socials";



export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-sky-400">
            JR
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {["about", "projects", "skills", "contact"].map((item, index) => (
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
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {SOCIALS.map((social, index) => (
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
          ))}
        </div>
      </div>
    </header>
  );
}