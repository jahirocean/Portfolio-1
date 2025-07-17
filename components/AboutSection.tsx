"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants/skills";
import { useEffect, useState } from "react";


export default function AboutSection() {

   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-sky-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Get to know <span className="text-sky-400">me!</span>
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                I'm a passionate Full Stack Developer with expertise in building
                web applications using modern technologies like React, Next.js,
                Node.js, and various databases.
              </p>
              <p>
                My journey in web development started in 20XX when I built my
                first website. Since then, I've worked on numerous projects,
                both personal and professional, that have helped me grow as a
                developer.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor
                activities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              My <span className="text-sky-400">Skills</span>
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}