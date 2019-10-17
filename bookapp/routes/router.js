// CREATE ROUTES TO DATABASE -----------------------------------------------
const router = require("express").Router();
const axios = require("axios");
const path = require("path");
const booksController = require("../../controllers/books");



// * `/api/books`(get) - Should return all saved books as JSON.

// * `/api/books`(post) - Will be used to save a new book to the database.

// * `/api/books/:id`(delete) - Will be used to delete a book from the database by Mongo`_id`.

// * `*`(get) - Will load your single HTML page in `client/build/index.html`.Make sure you have this _after_ all other routes are defined.



// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



//get book form Google books  using axios
router.get("/books", (req, res) => {
    //get the value of button from the data attribute
    //assign it to a variable
    //https://www.googleapis.com/books/v1/volumes?q=search+terms
    let searchTerm = req.body.id;
    //let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=lISwnQ5TdGTfXd9Ex4N17L98lbq6KRRi&limit=10&q=" + searchTerm;
    let url ="https://play.google.com/store/books" + searchTerm;
    axios
        .get(url)
        .then(({ data: { items } }) => res.json(items))
        .catch(err => res.status(422).json(err));
});


router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

//get books by Id/params:Id
router.route("/:id")
// call the function to find book by Id
    .get(booksController.findById)
    //call function to update a books by Id
    .put(booksController.update)
    //call function to remove books by Id
    .delete(booksController.remove);

module.exports = router;
