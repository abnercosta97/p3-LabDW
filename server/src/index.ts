import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import reservaRoutes from "./routes/reservaRoutes";

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/reservas", reservaRoutes);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
