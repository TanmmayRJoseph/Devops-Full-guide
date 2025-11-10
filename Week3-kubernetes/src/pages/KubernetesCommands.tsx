// File: src/components/KubernetesCommands.tsx or .jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { sections } from "./Commands";


export default function KubernetesCommands() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-sky-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🚀 Kubernetes & Minikube Command Guide
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`rounded-2xl shadow-lg p-6 bg-gradient-to-br ${section.color} bg-opacity-90`}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.commands.map((c, i) => (
                <motion.li
                  key={i}
                  onClick={() => setSelected(c.cmd)}
                  className={`cursor-pointer p-3 rounded-lg bg-black/30 hover:bg-black/40 transition ${
                    selected === c.cmd ? "ring-2 ring-white" : ""
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  <code className="block font-mono text-lg text-sky-200">
                    {c.cmd}
                  </code>
                  <p className="text-sm text-gray-200">{c.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <footer className="text-center text-gray-400 mt-12 text-sm">
        Built with ❤️ using React, Tailwind CSS & Framer Motion
      </footer>
    </div>
  );
}
