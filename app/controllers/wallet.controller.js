const db = require("../models");
const Wallet = db.wallet;
const mongoose = require('mongoose');


exports.create = (req, res) => {
    
    if (!req.body.balance) {
      res.status(400).send({ message: "Content can not be empty!" });
       return;
    }

   const wallet = new Wallet({
    balance: req.body.balance,
    name: req.body.name
  });
  wallet
    .save(wallet)
    .then(data => {
        console.log(data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the wallet."
      });
    });
};

   exports.findOne = (req, res) => {
     const id = req.params.id;
  
    Wallet.findById(id)
      .then(data => {
        if (!data)
      res.status(404).send({ message: "Not found Wallet with id " + id });
       else res.send(data);
      })
     .catch(err => {
         res
           .status(500)
           .send({ message: "Error retrieving Wallet with id=" + id });
       });
    };

    
    exports.create = (req, res) => {
    
        if (!req.body.amount) {
          res.status(400).send({ message: "Content can not be empty!" });
           return;
        }
    
       const wallet = new Wallet({
        amount: req.body.amount,
        description: req.body.description
      });
      wallet
        .save(wallet)
        .then(data => {
            console.log(data)
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the wallet."
          });
        });
    };
    

//     exports.create = (req, res) => {
//     const NewSchema = new mongoose.Schema({
//         walletId:String,
//         balance: Number,
//         transactionId: Number,
//         name: String,
//         date: String 
    
//     });
//     const newModel = new mongoose.model("Collection", NewSchema);
    
//     const data = new newModel({walletId:"12222",balance:"234", transactionId:"345",name:"abc",date:"00",});
//     data.save();
    
// }



exports.create = (req, res) => {
    if (!req.body.productId) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    const wallet = new Wallet({
      productId: req.body.productId,
    });
    wallet
      .save(wallet)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Wallet."
        });
      });
  };

  exports.findOne = (req, res) => {
    Wallet.findOne({} ).toArray((err, result) => {
        if(err){
              return res.status (500).send(err);
          }
          res.send(result);
      });
  };
  
//   exports.findAll = (req,res ) => {
    // Wallet.findAll({} ).toArray((err, result) => {
    //   if(err){
    //         return res.status (500).send(err);
    //     }
    //     res.send(result);
    // });
// };
   