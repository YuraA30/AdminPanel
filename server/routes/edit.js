const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/:product_id", (req, res) => {
  db.query(
    `SELECT *,specs.name AS specs,specs.id AS specs_id FROM specs INNER JOIN products WHERE product_id = ${req.params.product_id} GROUP BY specs.name`,
    (err, result) => {
      if(err) console.log(err)
      res.json(result);
    console.log(result)
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
    // res.redirect(req.header('Referer'))
    db.query(
      `SELECT * FROM specs WHERE subcategory_id = ${req.params.product_id} GROUP BY name`,
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
          let sql = `UPDATE specs set ? where product_id = ${req.params.product_id}`;
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