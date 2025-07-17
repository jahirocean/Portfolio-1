"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 text-center">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-sky-400">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-slate-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10">
              I build exceptional digital experiences with modern web technologies.
              Currently focused on creating accessible, user-friendly applications.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg font-medium transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-sky-400 text-sky-400 hover:bg-sky-400/10 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-sky-400">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-slate-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10">
              I build exceptional digital experiences with modern web technologies.
              Currently focused on creating accessible, user-friendly applications.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-sky-400 text-sky-400 hover:bg-sky-400/10 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}

        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="animate-bounce block">
              <div className="w-8 h-14 border-4 border-slate-400 rounded-full flex justify-center items-start p-1">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-2 h-2 bg-slate-400 rounded-full"
                ></motion.div>
              </div>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}