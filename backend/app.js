import express from "express";
import cors from "cors";
import helmet from "helmet";

import adminAuthRoutes from "./routes/adminAuth.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/admin", adminAuthRoutes);
app.use("/api/products", productRoutes);

export default app;
