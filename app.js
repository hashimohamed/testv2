let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

// database url details
let url = "mongodb://localhost:27017/TCSCapstone";

// middleware enable data from post method
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//database connection without warning
const mongooseDbOptions = {
  // to avoid warnings with mongobd
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(url, mongooseDbOptions);

//connect the data
mongoose.connection;

// link to router
var AdminRouter = require("./routers/admin.router");

// link to product
var ProductRotuer = require("./routers/product.router");
// Link to router module, similar to import (For all the users)
var User = require("./routers/user.router.js");

var EmployeeRouter = require("./routers/employee.router");

var RequestRouter = require("./routers/request.router");

app.use("/admin", AdminRouter);
// middleware
app.use("/user", User);

//app.use("/product", Product);
app.use("/product", ProductRotuer);

app.use("/employee", EmployeeRouter);

app.use("/request", RequestRouter);

app.listen(9090, () => console.log("Running on server 9090"));
