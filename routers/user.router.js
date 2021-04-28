let express = require("express");
let router = express.Router(); //router reference.
let UserController = require("../controllers/user.controller.js");

//mapping sub path with http methods.
router.get("/allUserDetails", UserController.getUserDetails);
router.post("/storeUserDetails", UserController.signUpUserDetails);
router.get("/userSignIn/:email/:pWord", UserController.signInUser);
router.post("/checkout", UserController.checkout);
router.post("/checkFunds", UserController.checkProperFunds);
router.get("/getUser", UserController.getSingleUser);
router.put("/editProfile", UserController.editProfile);
router.put("/updateFunds", UserController.updateFunds);
router.put("/updateTicket", UserController.updateTicketRaised);
router.get("/getRaisedTickets", UserController.getTicketRasiedUsers);
router.get("/getOrders", UserController.getUsersWithOrders);

module.exports = router;
