const express = require('express');
const { setPosts, getPosts, editPost, deletePost} = require('../controllers/post.controller');
const router = express.Router();
const cors = require('cors');

router.use(cors());

router.get("/apiWeather", getPosts);

router.post("/apiWeather", setPosts);

router.put("/apiWeather/:id", editPost);

router.delete("/apiWeather/:id", deletePost);

module.exports = router;