import express, { Request, Response } from "express";
import morgan from 'morgan'; 
import routes from "./routes";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const initializeServer = () => {
  const app = express();
  app.use(morgan('dev'));
  app.use(express.json());
  routes(app);
  // @ts-ignore
  app.get("/", (_: Request, res: Response) => {
    return res.send("API is running");
  });

  return app;
};

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.info("Connected to MongoDB");

    const server = initializeServer();
    const PORT = process.env.PORT || 3000;
    
    server.listen(PORT, () => {
      console.info(`Server is running on port ${PORT}`);
    });

    return server;
  } catch (error:any) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if the DB connection fails
  }
};


startServer()
  .then(() => {})
  .catch((error) => {
    console.error(error.message);
  });

