import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json({
        week: "week 2",
        message: "Secon week of learning DevOps Learned Docker ",
        date: new Date()
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
