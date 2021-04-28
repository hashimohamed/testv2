let express = require("express");
const ProductController = require("../controllers/product.controller");
let router = express.Router();

router.post("/addProduct", ProductController.addProduct);
router.delete("/deleteProduct/:id", ProductController.deleteProduct);
router.put("/updateQuantity", ProductController.updateQuantity);
router.get("/getAllProducts", ProductController.getAllProducts);

module.exports = router;
