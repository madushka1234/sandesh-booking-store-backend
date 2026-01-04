import express, { Express } from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import {authMiddleware} from "./middleware/auth.middleware";
import bookRoutes from "./routes/book.routes";
import adminRoutes from "./routes/admin.routes";
import userRoutes from "./routes/user.routes";
import fileUploadRoutes from "./routes/file.upload.routes";
import path from "path";
import orderRoutes from "./routes/order.routes";

const app: Express = express();

app.use(express.json());


const allowedOrigins = ["http://localhost:5174", "http://localhost:5173"];


const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};

app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/admin",authMiddleware,adminRoutes);
app.use("/api/admin/users",authMiddleware,userRoutes);
app.use("/api/admin/book",authMiddleware,bookRoutes);
app.use("/api/book/all", bookRoutes);
app.use("/api/files", fileUploadRoutes,);
app.use("/api/order", authMiddleware, orderRoutes);
app.use("/api/customer/order/" ,orderRoutes)

/*app.use("/uploads/books", express.static(path.join(__dirname, "../uploads/users")));*/
app.use("/uploads/books", express.static(path.join(__dirname, "uploads/users")));

export default app;