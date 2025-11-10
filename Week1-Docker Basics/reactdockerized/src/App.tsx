import { motion } from "framer-motion";

const dockerCommands = [
  {
    title: "FROM image[:tag] [AS name]",
    desc: "Specifies the base image to use for a new image we will create.",
    example: "FROM ubuntu:20.04",
  },
  {
    title: "WORKDIR /path/to/workingDirectory",
    desc: "Sets the working directory for the commands to execute.",
    example: "WORKDIR /app",
  },
  {
    title: "COPY [--chown=<user>:<group>] <src>…<dest>",
    desc: "Copies files and context to build to the image.",
    example: "COPY . /app",
  },
  {
    title: "RUN <command>",
    desc: "Executes commands in the shell during image build.",
    example: "RUN npm run dev",
  },
  {
    title: "EXPOSE <port> [<port>/<protocol>….]",
    desc: "Informs Docker that container will listen on this port at runtime.",
    example: "EXPOSE 3000",
  },
  {
    title: "ENV KEY=VALUE",
    desc: "Sets the environment variable during the build process.",
    example: "ENV NODE_ENV=production",
  },
  {
    title: "ARG <name> [=<default value>]",
    desc: "Defines build-time variables.",
    example: "ARG NODE_VERSION=20",
  },
  {
    title: "VOLUME [\"/data\"]",
    desc: "External point inside a container to define storage.",
    example: "VOLUME /myvol",
  },
  {
    title: "CMD [\"executable\",\"param1\",\"param2\"]",
    desc: "Default command to execute when the container starts.",
    example: "CMD npm run dev",
  },
  {
    title: "docker run <image name>",
    desc: "Runs a container based on an image. Use -it for interactive mode.",
    example: "docker run -it ubuntu",
  },
  {
    title: "docker build -t <name>",
    desc: "-t stands for tag (optional). Builds an image from a Dockerfile.",
    example: "docker build -t backend .",
  },
  {
    title: "docker images",
    desc: "Lists all Docker images.",
    example: "docker images",
  },
  {
    title: "docker run -p <port>:<port> <dir_name>",
    desc: "Maps container ports to host ports.",
    example: "docker run -p 5173:5173 foldername",
  },
  {
    title: "docker ps",
    desc: "Lists all active and running containers. Use -a to list all.",
    example: "docker ps -a",
  },
  {
    title: "docker stop <name> OR <id>",
    desc: "Stops a running container.",
    example: "docker stop mycontainer",
  },
  {
    title: "docker container prune",
    desc: "Deletes all stopped containers.",
    example: "docker container prune",
  },
  {
    title: "docker rm <id> --force",
    desc: "Removes a container forcefully.",
    example: "docker rm 123abc --force",
  },
  {
    title: "Fix file change issue",
    desc: "To reflect local changes inside container use volumes.",
    example:
      'docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules <container_name>',
  },
];

export default function DockerCheatsheet() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🐳 Docker Commands Cheatsheet
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dockerCommands.map((cmd, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              {cmd.title}
            </h2>
            <p className="text-sm text-gray-300 mb-3">{cmd.desc}</p>
            <div className="bg-gray-800 p-2 rounded-lg font-mono text-sm text-green-400">
              {cmd.example}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          ⚙️ Vite Config for Docker (React)
        </h2>
        <pre className="bg-gray-800 p-4 rounded-xl text-sm text-green-400 overflow-x-auto">
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
})`}
        </pre>
      </motion.div>
    </div>
  );
}
