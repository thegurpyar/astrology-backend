import express, { Request, Response } from "express";


const initializeServer = () => {
  const app = express();

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

export { initializeServer, startServer };
