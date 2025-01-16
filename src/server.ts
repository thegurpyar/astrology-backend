import { startServer } from "./app";

startServer()
  .then(() => {})
  .catch((error) => {
    console.error(error.message);
  });
