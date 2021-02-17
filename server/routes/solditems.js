const { Router } = require("express");
const router = Router();
const db = require("../config/db");

// Get cart for current user
router.get("/", (req, res) => {
  db.query(
    `SELECT * FROM products
    INNER JOIN orders ON products.id = orders.product_id`,
    (err, result) => {
      res.json(result);
      // console.log(req.user_id);
    }
  );

  // db.query(
  //   `SELECT * FROM products WHERE id IN
  //     (SELECT product_id FROM orders WHERE user_id =
  //     (SELECT id FROM users WHERE token = "${req.params.token}"))`,
  //   (err, result) => {
  //     res.json(result);
  //     console.log(err);
  //   }
  // );
});

module.exports = router;
