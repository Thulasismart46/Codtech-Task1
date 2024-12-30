const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

// Get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a product
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// Create an order
app.post("/orders", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

// Get orders by user
app.get("/orders/:userId", async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
