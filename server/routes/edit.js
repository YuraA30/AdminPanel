const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/:product_id", (req, res) => {
  arr = {};
    db.query(
      `SELECT * FROM products WHERE id = ${req.params.product_id}`,
      (err, result) => {
        res.json(result)
      }
    );
})

router.post("/:product_id", async (req, res) => {
  json = JSON.parse(JSON.stringify(req.body));
  let product = {
    name: json.name,
    brand: json.brand,
    description: json.description,
    img: json.image,
    price: json.price,
    count: json.count,
  };

  db.query(`UPDATE products set ? where id = ${req.params.product_id}`, product, (err, result) => {
    if (err) throw err;
    res.redirect(req.header('Referer'))
  });
});

module.exports = router;