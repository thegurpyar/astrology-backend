import express from "express";

const initializeServer = () => {
  const app = express();

  app.get("/", (_, res) => {
    return res.send("API is running");
  });


  return app;
};

const startServer = async () => {

  const server = initializeServer();

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
  });

  return server;
};

export { initializeServer, startServer };
