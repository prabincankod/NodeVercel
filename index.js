import errorHandler from "./src/middleware/errorMiddleware.js";
import userRoutes from "./src/routes/user_routes.js";
import bookRoutes from "./src/routes/book_routes.js";
import authorRoutes from "./src/routes/author_routes.js";
import favoriteRoutes from "./src/routes/favorites_routes.js";
import cartRoutes from "./src/routes/cart_routes.js";
import orderRoutes from "./src/routes/order_routes.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/author", authorRoutes);
app.use("/favorite", favoriteRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

app.get("/", (req, res) => {
  res.send("Express JS on Vercel");
});

const port = process.env.PORT || 8080;
app.use(errorHandler.errorHandler);
app.listen(port, (err, res) => {
  console.log("[INFO] Server Running on port:", port);
});
