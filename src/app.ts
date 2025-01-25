import express, { Request, Response } from "express";
import morgan from 'morgan'; 
import routes from "./routes";
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

  const server = initializeServer();

  const PORT =  3000;

  server.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
  });

  return server;
};

startServer()
  .then(() => {})
  .catch((error) => {
    console.error(error.message);
  });

