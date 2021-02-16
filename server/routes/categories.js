const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  if(req.baseUrl == "/api/admin/categories"){
  db.query(`SELECT * FROM categories`, (err, result) => {
    res.json(result);
  });
} else {
    db.query(`SELECT * FROM categories WHERE level = 0`, (err, result) => {
    res.json(result);
  });
  }
});

// router.get("/:id", (req, res) => {
//   db.query(
//     `SELECT * FROM categories WHERE parent_id = ${req.params.id}`,
//     (err, result) => {
//       if (result.length) {
//         res.json(result);
//       } else {
//         db.query(
//           `SELECT * FROM products WHERE subcategory_id = ${req.params.id}`,
//           (err, result) => {
//             res.json(result);
//           }
//         );
//       }
//     }
//   );
// });

router.get("/:cat", (req, res) => {
  console.log(req.originalUrl)
if(req.baseUrl == "/api/admin/categories"){
  db.query(
    `SELECT * FROM products WHERE subcategory_id = ${req.params.cat} ORDER BY id DESC`,
    (err, result) => {
      res.json(result);
    }
  );
} else {
    db.query(
    `SELECT * FROM categories WHERE parent_id = ${req.params.cat}`,
    (err, result) => {
       res.json(result);
    }
  );
}
//res.send(req.originalUrl)
});

router.get("/additem/:cat",async(req,res) => {
if(req.baseUrl == "/api/admin/categories"){
  db.query(
    `SELECT DISTINCT name FROM specs WHERE subcategory_id = ${req.params.cat}`,
    (err, result) => {
      console.log(result);
      res.json(result);
    }
  );
}
});

router.post("/additem/:cat", async (req, res) => {
  if(req.baseUrl == "/api/admin/categories"){
  json = JSON.parse(JSON.stringify(req.body));
  let user = {
    subcategory_id : req.params.cat,
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
    res.redirect(req.header('Referer'))
  });
}
});

router.get("/:cat/:subcat", (req, res) => {
  db.query(
    `SELECT * FROM products WHERE subcategory_id = ${req.params.subcat}  ORDER BY id DESC`,
    (err, result) => {
      res.json(result);
    }
  );
});

module.exports = router;