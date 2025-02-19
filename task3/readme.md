for testing...

Get all book items ----Get http://localhost:5000/books

Get a specific book item by id ----Get http://localhost:5000/books/<book_id>

POST a new book item ----POST http://localhost:5000/books

json: {
    "title": ,
    "author": ,
    "publishedYear": 
 }
  
PUT(update) an exsisting book item ----> PUT http://localhost:5000/books/<book_id>


 json: {
  "title": ,
  "author": ,
  "publishedYear": 
}



Delete a book item ----> DELETE http://localhost:5000/books/<book_id>