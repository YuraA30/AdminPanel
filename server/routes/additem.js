const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/:cat",async(req,res) => {
  db.query(
    `SELECT DISTINCT name FROM specs WHERE subcategory_id = ${req.params.cat}`,
    (err, result) => {
      console.log(result);
      res.json(result);
    }
  );
});

router.post("/:cat", async (req, res) => {
  json = JSON.parse(JSON.stringify(req.body));
  let product = {
    subcategory_id : req.params.cat,
    name: json.name,
    brand: json.brand,
    description: json.description,
    img: json.image,
    price: json.price,
    count: json.count,
  };
  let sql = "INSERT INTO products set ?";
  db.query(sql, product, (err, result) => {
    if (err) throw err;
    res.redirect(req.header('Referer'))
  });
});

module.exports = router;