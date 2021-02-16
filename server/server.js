const express = require("express");
const app = express();

// Middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const authToken = require("./middleware/authToken");

// Routes
app.use("/api/categories", require("./routes/categories"));
app.use("/api/subcategories", require("./routes/subcategories"));
app.use("/api/products", require("./routes/products"));
app.use("/api/login", require("./routes/login"));
app.use("/api/registration", require("./routes/registration"));
app.use("/api/forgetPassword", require("./routes/forgetPassword"));
app.use("/api/resetPassword", require("./routes/resetPassword"));
app.use("/api/admin/categories", require("./routes/categories"));
app.use("/api/admin/additem", require("./routes/additem"));
app.use("/api/admin/delete", require("./routes/products"));
app.use("/api/admin/edit", require("./routes/edit"));
app.use("/api/admin/addcategory", require("./routes/addcategory"));
app.use("/api/admin/addsubcategory", require("./routes/addsubcategory"));
// SPA
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});