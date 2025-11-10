import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: [
      "http://localhost:3000",
      "https://localhost:3000",
      "http://localhost:5173",
      "https://localhost:5174",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }
));

const quotes = [
  "Deploy small, learn big 💡",
  "Code. Commit. Containerize. 🚀",
  "DevOps is about culture, not just tools 👷‍♂️",
  "Infrastructure as Code = Infrastructure as Poetry 📜",
  "DevOps is about culture, not just tools 👷‍♂️",
];
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript 🚀");
});

app.get("/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
