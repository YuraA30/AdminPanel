const { Router } = require("express");
const router = Router();
const db = require("../config/db");


router.post("/", async (req, res) => {
  console.log('aaaaaaaaaaa')
  json = JSON.parse(JSON.stringify(req.body));
  let user = {
    subcategory_id : 8,
    name: json.name,
    brand: json.brand,
    description: json.description,
    img: json.image,
    price: json.price,
    count: json.count,
  };
  let sql = "INSERT INTO products set ?";
  db.query(sql, user, (err, result) => {
    if (err) throw err;
  });
});

module.exports = router;