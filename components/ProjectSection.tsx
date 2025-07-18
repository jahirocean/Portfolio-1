"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { useEffect, useState } from "react";
import ClientSideOnly from "./ClientSideOnly";
import Image from "next/image";

export default function ProjectSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <ClientSideOnly>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-sky-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-400">
              Here you will find some of the personal and clients projects that I
              created with each project containing its own case study
            </p>
          </motion.div>
        </ClientSideOnly>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ClientSideOnly key={`client-${project.title}`}>
              <motion.div
                key={`motion-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-sky-500/10 transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={500}  // Adjusted to more reasonable dimensions
                    height={300}
                    priority={index < 3} // Only prioritize first few images
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={`tag-${project.title}-${tag}`}
                        className="px-3 py-1 bg-slate-700/50 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </ClientSideOnly>
          ))}
        </div>
      </div>
    </section>
  );
}