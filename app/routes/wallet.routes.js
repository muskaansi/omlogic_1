module.exports = app => {
    const wallets = require("../controllers/wallet.controller.js");
  
    var router = require("express").Router();
  
     router.post("/wallet", wallets.create);
     router.get("/:id", wallets.findOne);
     router.post("/:id/transaction", wallets.create);
     router.post("/:id/purchase", wallets.create);
     router.get("/products", wallets.findOne);

    app.use("/", router);
}