import express from "express";
import { getBooks, addBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);      // Get all books
router.post("/", addBook);      // Add a new book
router.delete("/:id", deleteBook); // Delete a book

export default router;
