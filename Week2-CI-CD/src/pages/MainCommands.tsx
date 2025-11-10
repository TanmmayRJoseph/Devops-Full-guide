import { motion } from "framer-motion";

export default function MainCommands() {
    const commands = [
        {
            key: "on",
            desc: "Tells when your workflow should start. Think of it as a trigger — like pressing the start button!",
            emoji: "⏰",
        },
        {
            key: "jobs",
            desc: "Groups all the work your helper robot should do — like a list of tasks on a to-do board.",
            emoji: "🧱",
        },
        {
            key: "steps",
            desc: "Lists each tiny step inside a job. It’s how the robot completes its mission one step at a time.",
            emoji: "👣",
        },
        {
            key: "uses",
            desc: "Grabs someone else’s pre-built tool (called an Action) so you don’t have to build everything from scratch.",
            emoji: "🧩",
        },
        {
            key: "run",
            desc: "Runs your own terminal commands — just like typing npm test or echo Hello World in VS Code!",
            emoji: "💻",
        },
    ];

    return (
        <div className="relative min-h-screen flex flex-col items-center text-white px-6 py-12 overflow-hidden">
            {/* 🌈 Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 animate-gradient-x opacity-90" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />

            {/* 🧭 Header Section */}
            <motion.h1
                className="relative z-10 text-5xl font-bold text-center mb-6"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                ⚙️ GitHub Actions Keywords Explained
            </motion.h1>

            <motion.p
                className="relative z-10 text-lg md:text-xl text-center max-w-3xl mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Every GitHub Action is like giving instructions to a tiny helper robot 🤖.
                Let’s see what words (or <span className="text-yellow-300 font-semibold">keywords</span>)
                this robot understands when setting up automation!
            </motion.p>

            {/* 🧩 Illustration */}
            <motion.img
                src="https://cdn.dribbble.com/userupload/10287463/file/original-1f1ad5ce9c04df1e153890fb64226e08.png"
                alt="GitHub Actions Workflow"
                className="relative z-10 w-72 md:w-[400px] mb-10 rounded-2xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
            />

            {/* 🧱 Commands Section */}
            <motion.div
                className="relative z-10 grid md:grid-cols-2 gap-6 max-w-4xl w-full mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                {commands.map((cmd, i) => (
                    <motion.div
                        key={cmd.key}
                        className="bg-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition backdrop-blur-md"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            {cmd.emoji} <span className="text-yellow-300">{cmd.key}</span>
                        </h2>
                        <p className="text-sm md:text-base opacity-90 leading-relaxed">{cmd.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* 💻 Example Workflows */}
            <motion.div
                className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                {/* Simple Practice */}
                <div className="bg-black/40 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                        🎯 Simple Practice
                    </h3>
                    <p className="text-sm mb-4 opacity-80">
                        A small workflow that runs whenever you push code — and prints a message.
                    </p>
                    <pre className="text-sm bg-black/50 p-4 rounded-xl overflow-x-auto">
                        {`on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Hello World"`}
                    </pre>
                </div>

                {/* Industry Grade */}
                <div className="bg-black/40 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold mb-2 text-green-300">
                        🏢 Industry Grade Practice
                    </h3>
                    <p className="text-sm mb-4 opacity-80">
                        A realistic workflow for a Node.js app that installs dependencies, runs tests, and builds automatically.
                    </p>
                    <pre className="text-sm bg-black/50 p-4 rounded-xl overflow-x-auto">
                        {`on:
  push:
    branches: [ "main", "develop" ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build app
        run: npm run build`}
                    </pre>
                </div>
            </motion.div>

            {/* 📘 Summary */}
            <motion.div
                className="relative z-10 mt-16 bg-white/10 p-6 rounded-2xl shadow-lg max-w-3xl text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <h3 className="text-2xl font-semibold text-cyan-300 mb-2">💡 Quick Recap</h3>
                <p className="text-sm md:text-base leading-relaxed">
                    GitHub Actions is like a super-smart robot that follows your exact instructions
                    to build, test, and deploy your project automatically.
                    By using <span className="text-yellow-300 font-semibold">on</span>,{" "}
                    <span className="text-yellow-300 font-semibold">jobs</span>,{" "}
                    <span className="text-yellow-300 font-semibold">steps</span>,{" "}
                    <span className="text-yellow-300 font-semibold">uses</span>, and{" "}
                    <span className="text-yellow-300 font-semibold">run</span> —
                    you teach it what to do and when to do it!
                </p>
            </motion.div>
        </div>
    );
}
