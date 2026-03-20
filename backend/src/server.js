import expres from "express"
import "dotenv/config"

import authRoutes from "./routes/auth.route.js";
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";

const app = expres()
const PORT = process.env.PORT 


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});