let mongoose = require("mongoose");
mongoose.Promise = global.Promise; // creating reference.

let UserSchema = mongoose.Schema({
  isLocked: Boolean,
  loginTries: Number,
  fName: String,
  lName: String,
  email: String,
  pWord: String,
  dob: Date, // Change to Date type
  phoneNum: String,
  street: String,
  city: String,
  state: String,
  zip: Number,
  funds: Number,
  actNum: Number,
  balance: Number,
  ticketRaised: Boolean,
  Orders: [{ id: Number, products: [String], cost: Number, status: String }],
});

let UserModel;
try {
  UserModel = mongoose.model("user");
} catch {
  UserModel = mongoose.model("user", UserSchema);
}

module.exports = UserModel;
