
const express = require("express"); //use express router
const postController = require("../controllers/post");
const router = express.Router();
router.get("/", postController.getPosts);
router.post("/post", postController.createPosts); //creating a new post
module.exports = router;