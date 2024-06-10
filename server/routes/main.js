const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * GET
 * HOME
 */

// Routes
router.get('', async (req, res) => {
  const locals = {
    title: "The People's Voice",
    description: "The People, Their Voice, Their Way",
  }

  try {
    const data = await Post.find({});
    res.render("index", { locals, data });
  } catch (error) {
   console.log(error)
  }
});


router.get("/about", (req, res) => {
  res.render("about");
});

// function insertPostData() {
//     Post.insertMany([
//         {
//             title: "News Flash Post",
//             body: "This is the body text"
//         },
//         {
//             title: "The People of America",
//             body: "This is the body text"
//         },
//         {
//             title: "THe North vs The South Civil War Part 2",
//             body: "This is the body text"
//         },
//         {
//             title: "Racism & Sexism",
//             body: "This is the body text"
//         },
//         {
//             title: "The Wild Wild West",
//             body: "This is the body text"
//         },
//         {
//             title: "Texas vs Mexico Border",
//             body: "This is the body text"
//         },
//         {
//             title: "Left Wing vs Rght Wing... Same Bird?",
//             body: "This is the body text"
//         },
//         {
//             title: "Inflation, Inflation, Inflation",
//             body: "This is the body text"
//         },
//         {
//             title: "Teachers need more money",
//             body: "This is the body text"
//         },
//         {
//             title: "Our Government does not care about us",
//             body: "This is the body text"
//         },
//     ])
// }

// insertPostData();

module.exports = router;
