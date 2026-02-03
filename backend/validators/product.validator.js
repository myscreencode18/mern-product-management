import { body } from "express-validator";

export const createProductValidation = [
  body("metaTitle")
    .trim()
    .notEmpty()
    .withMessage("Meta title is required"),

  body("productName")
    .trim()
    .notEmpty()
    .withMessage("Product name is required"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required"),

  body("gallery")
    .isArray({ min: 1 })
    .withMessage("At least one product image is required"),

  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),

  body("discountedPrice")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Discounted price must be a positive number"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
];

export const updateProductValidation = [
  body("metaTitle")
    .trim()
    .notEmpty()
    .withMessage("Meta title is required"),

  body("productName")
    .trim()
    .notEmpty()
    .withMessage("Product name is required"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required"),

  body("gallery")
    .isArray({ min: 1 })
    .withMessage("At least one product image is required"),

  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),

  body("discountedPrice")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Discounted price must be a positive number"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
];

export const patchProductValidation = [
  body("metaTitle")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Meta title cannot be empty"),

  body("productName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Product name cannot be empty"),

  body("slug")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Slug cannot be empty"),

  body("gallery")
    .optional()
    .isArray({ min: 1 })
    .withMessage("At least one product image is required"),

  body("price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),

  body("discountedPrice")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Discounted price must be a positive number"),

  body("description")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Description cannot be empty")
];


