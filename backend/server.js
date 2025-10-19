require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const questionRoutes = require('./routes/questionRoutes');
const {protect} = require("./middlewares/authMiddleware");
const {generateInterviewQuestions, generateConceptExplanations} = require("./controllers/aiController");

const app = express();

// CORS configuration
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"], // Fixed typo
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Connect to database
connectDB();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions",protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation",protect, generateConceptExplanations);

// Static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Server is running!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));