const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/:cat",(req,res) =>{
  db.query(
    `SELECT * FROM categories WHERE level = 0`,
    (err, result) => {
      res.json(result);
      console.log(result);
    }
  );
})

router.post("/:cat", (req, res) => {
  json = JSON.parse(JSON.stringify(req.body));
  let category = {
    parent_id: req.params.cat,
    child_id: '0',
    order_id: '0',
    lvl: '0',
    level: '1',
    name: json.name,
    img: json.image
  };
  db.query("INSERT INTO categories set ?", category, (err, result) => {
    if (err){console.log(err)}
    res.redirect(req.header('Referer'))
  });
});

module.exports = router;