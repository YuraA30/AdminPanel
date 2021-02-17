const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/:product_id", (req, res) => {
  db.query(
    `SELECT *,specs.name AS specs FROM specs INNER JOIN products WHERE product_id = ${req.params.product_id} GROUP BY specs.name`,
    (err, result) => {
      if(err) console.log(err)
      res.json(result);
    console.log(result)
    }
  );
})

router.post("/:cat", async (req, res) => {
  json = JSON.parse(JSON.stringify(req.body));
  let product = {
    subcategory_id: req.params.cat,
    name: json.name,
    brand: json.brand,
    description: json.description,
    img: json.image,
    price: json.price,
    count: json.count,
  };

  db.query(`UPDATE products set ?`, product, (err, result) => {
    if (err) throw err;

    const insertId = result.insertId;

    // res.redirect(req.header('Referer'))
    db.query(
      `SELECT * FROM specs WHERE subcategory_id = ${req.params.cat} GROUP BY name`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(req.body);
        var i = 0;
        result.forEach((element) => {
          let specs = {
            subcategory_id: req.params.cat,
            product_id: insertId,
            name: element.name,
            value: req.body['spec_' + element.id],
          };
          let sql = "UPDATE specs set ?";
          db.query(sql, specs, (err, result) => {
            if (err) throw err;
            console.log(i);
            i++;
          });
        });
      }
    );
  });
});

module.exports = router;