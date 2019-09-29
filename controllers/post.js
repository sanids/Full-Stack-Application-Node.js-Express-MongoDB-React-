
const Post = require('../models/post') //taking exports from mongo

exports.getPosts = (req, res) => {
    res.json({
        posts:  [
            {
                title: "First post"
            },
            {
                title: "Second post"
            }
        ]
    });
};

//json formatting

//creating new post, must create new object
exports.createPost = (req, res) => {
    const post = new Post(req, body)
    console.log("CREATING POST: ", post);

};