const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  db.query(`SELECT * FROM products`, (err, result) => {
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  db.query(
    `DELETE FROM products WHERE id = ${req.params.id}`,
    (err, result) => {
      if(err){ console.log(err)
      } else {
      res.json(result);
      }
    }
      );
    }
  )

module.exports = router;
