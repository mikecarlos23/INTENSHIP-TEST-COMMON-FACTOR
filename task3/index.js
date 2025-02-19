const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/booksDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Book Schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedYear: Number
});

const Book = mongoose.model("Book", bookSchema);

// Get all books
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific book by ID
app.get("/books/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new book
app.post("/books", async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        const newBook = new Book({ title, author, publishedYear });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update an existing book
app.put("/books/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ message: "Book not found" });
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a book
app.delete("/books/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//for testing...

//Get all book items ----Get http://localhost:5000/books

//Get a specific book item by id ----Get http://localhost:5000/books/<book_id>

// POST a new book item ----POST http://localhost:5000/books

//json: {
    //"title": ,
    //"author": ,
    //"publishedYear": 
 // }
  
//PUT(update) an exsisting book item ----> PUT http://localhost:5000/books/<book_id>

/**
 * json: {
  "title": ,
  "author": ,
  "publishedYear": 
}

 */

//Delete a book item ----> DELETE http://localhost:5000/books/<book_id>


