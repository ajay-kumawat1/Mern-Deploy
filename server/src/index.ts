import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// GET route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

// API route example
app.get("/api/message", (req: Request, res: Response) => {
  res.json({ message: "Hello from the server!", timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
