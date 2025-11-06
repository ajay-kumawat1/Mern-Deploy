import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// GET route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
