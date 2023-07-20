const express = require("express");
const Controller = require("../controllers/Controller");
const { authenticate, authorizeAdmin } = require("../middleware/authenticate");
const router = express.Router();

//ADMIN

router.post("/login", Controller.login);
router.post("/register", authenticate, authorizeAdmin, Controller.register);

router.get("/items", Controller.getItems);
router.post(
  "/items/add",
  authenticate,
  authorizeAdmin,
  Controller.addItemWithIngredients
);
router.delete(
  "/items/delete/:id",
  authenticate,
  authorizeAdmin,
  Controller.deleteItem
);
router.put(
  "/items/edit/:id",
  authenticate,
  authorizeAdmin,
  Controller.editItem
);
router.get("/items/:id", Controller.getItemById);

router.get(
  "/categories",
  authenticate,
  authorizeAdmin,
  Controller.getCategories
);
router.post(
  "/categories/add",
  authenticate,
  authorizeAdmin,
  Controller.addCategory
);
router.delete(
  "/categories/delete/:id",
  authenticate,
  authorizeAdmin,
  Controller.deleteCategory
);
router.put(
  "/categories/edit/:id",
  authenticate,
  authorizeAdmin,
  Controller.editCategory
);
router.get(
  "/categories/:id",
  authenticate,
  authorizeAdmin,
  Controller.getCategoryById
);

//USER

router.get("/client/items", Controller.getAllItemsUser);
router.get("/client/items/:id", Controller.getItemByIdUser);

module.exports = router;
