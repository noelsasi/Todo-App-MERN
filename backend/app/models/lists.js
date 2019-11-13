// Example model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: String,
  description: String,
  bucket: String,
  isComplete: Boolean
});

ListSchema.virtual("date").get(() => this._id.getTimestamp());

mongoose.model("lists", ListSchema);
