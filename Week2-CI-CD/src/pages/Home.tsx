import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* 🌈 Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 animate-gradient-x opacity-90" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* 🌍 Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 space-y-12 max-w-6xl">
        <motion.h1
          className="text-5xl font-bold text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          🚀 What is CI/CD & GitHub Actions? update the code and deployed 
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Think of <span className="font-semibold text-yellow-300">CI/CD</span> as a
          friendly robot that helps developers build, test, and deploy code faster.
          Every time you make a change in your project, it automatically checks if
          everything still works and then updates your live website.
          <br />
          <br />
          <span className="font-semibold text-cyan-300">GitHub Actions</span> is the
          tool that gives this robot its powers — helping it automate everything right
          inside GitHub.
        </motion.p>



        {/* 🧱 Two Columns for Explanation */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 w-full mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {/* Left: Continuous Integration */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:scale-[1.02] transition">
            <h2 className="text-2xl font-bold mb-3 text-yellow-300">
              🔧 Continuous Integration (CI)
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              CI automatically checks your code whenever you push changes to GitHub.
              It ensures your app builds correctly, passes all tests, and doesn’t break
              other parts of the project.
            </p>
            <pre className="text-sm bg-black/40 p-4 rounded-xl overflow-x-auto">
              {`on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run build`}
            </pre>
          </div>

          {/* Right: Continuous Deployment */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:scale-[1.02] transition">
            <h2 className="text-2xl font-bold mb-3 text-green-300">
              🌍 Continuous Deployment (CD)
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              CD takes your tested app and automatically deploys it to the world —
              for example, on <span className="font-semibold">Vercel</span>,{" "}
              <span className="font-semibold">Netlify</span>, or{" "}
              <span className="font-semibold">AWS</span> — every time your main
              branch is updated.
            </p>
            <pre className="text-sm bg-black/40 p-4 rounded-xl overflow-x-auto">
              {`on:
  push:
    branches: [ "main", "release/*" ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm test
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25`}
            </pre>
          </div>
        </motion.div>


        {/* 🧠 Summary Section */}
        <motion.div
          className="bg-white/10 p-6 mt-16 rounded-2xl shadow-lg max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-semibold text-pink-300 mb-2">
            💡 Why CI/CD Matters
          </h3>
          <p className="text-sm leading-relaxed">
            CI/CD makes development faster, safer, and more reliable.
            Instead of manually testing and deploying, automation takes over — ensuring
            every update you make is reviewed, tested, and deployed with confidence.
          </p>
          <Link to="/main-commands">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">See More</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
