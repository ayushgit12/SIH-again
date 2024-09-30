import express from "express";
import userRoutes from "./userRoutes.js";
const apiRouter = express.Router();

apiRouter.use("/users", userRoutes);
export default apiRouter;
