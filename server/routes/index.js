let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET about page. */
router.get("/about", indexController.displayAboutPage);

/* GET products page. */
router.get("/products", indexController.displayProductsPage);

/* GET services page. */
router.get("/services", indexController.displayServicesPage);

/* GET contact page. */
router.get("/contact", indexController.displayContactPage);

/* GET-  displays the Login page. */

router.get("/login", indexController.displayLoginPage);

/* Post processes the page. */
router.post("/login", indexController.processLoginPage);

/* GET display the User Registration page. */
router.get("/register", indexController.displayRegisterPage);

/* Post process the User Registration page. */
router.post("/register", indexController.processRegisterPage);

/* GET perform user logout  */
router.get("/logout", indexController.performLogout);

module.exports = router;
