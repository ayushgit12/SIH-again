import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import apiRouter from "./routes/apiRouter.js";
const port = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// const mouse={
//   x:0,
//   y:0,
//   timestamp:0
// };


// app.get("/mouse", (req, res) => {
//   res.json(mouse);
// })

// app.post("/mouse-data", (req, res) => {
//   const mouseData = req.body;
//   console.log("Received mouse data:", mouseData);

//   res.status(200).json({ message: "Mouse data received successfully" });
// });

app.use("/api", apiRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
