import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import {
  createProductValidation,
  updateProductValidation,
  patchProductValidation
} from "../validators/product.validator.js";

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin protected routes
router.post(
  "/",
  authMiddleware,
   createProductValidation,
  validate,
  createProduct
);

router.put(
  "/:id",
  authMiddleware,
  updateProductValidation,
  validate,
  updateProduct
);

router.patch(
  "/:id",
  authMiddleware,
  patchProductValidation,
  validate,
  updateProduct
);

router.delete("/:id", authMiddleware, deleteProduct);

export default router;
