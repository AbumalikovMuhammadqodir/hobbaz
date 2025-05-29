import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected successed");
    const PORT = process.env.PORT ?? 3005;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port ${PORT}`);
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("ERROR on connecting to MongoDB", err));
