const mongoose = require("mongoose");
const lists = mongoose.model("lists");

module.exports = {
  view: function(req, res, next) {
    lists.find((err, list) => {
      if (err) return next(err);
      res.send({
        list: list
      });
    });
  },

  one: function(req, res, next) {
    let id = req.params.id;
    lists.findById(id, (err, todo) => {
      res.json(todo);
    });
  },

  add: function(req, res) {
    var List = new lists(req.body);
    List.save((err, data) => {
      if (!err) {
        console.log(data.title + "is saved to the Db");
        res.send({
          data: data
        });
      } else {
        console.log("epudu error ena.. chi thu");
      }
    });
  },

  complete: function(req, res) {
    lists.findById(req.params.id, function(err, List) {
      if (!List) {
        res.send("data is not found");
      } else {
        List.isComplete = req.body.isComplete;
      }
      List.save()
        .then(todo => {
          res.json("Todo updated");
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  },

  update: function(req, res) {
    lists.findById(req.params.id, function(err, List) {
      if (!List) {
        res.send("data is not found");
      } else {
        List.title = req.body.title;
        List.description = req.body.description;
        List.bucket = req.body.bucket;
        List.isComplete = req.body.isComplete;
      }
      List.save()
        .then(todo => {
          res.json("Todo updated");
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  },

  delete: function(req, res) {
    lists.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
        res.send("Item deleted successfully");
      } else {
        console.log("Malli error chi, siggu ledu ra niku..");
      }
    });
  }
};
