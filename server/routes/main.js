const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * GET
 * HOME
 */

// Routes
router.get('', async (req, res) => {
  try {
    const locals = {
      title: "The People's Voice",
      description: "The People, Their Voice, Their Way",
    };

    let perPage = 5;
    let page = req.query.page || 1;

    const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

// router.get('', async (req, res) => {
//     const locals = {
//       title: "The People's Voice",
//       description: "The People, Their Voice, Their Way",
//     }

//     try {
//       const data = await Post.find();
//       res.render('index', { locals, data });
//     } catch (error) {
//      console.log(error)
//     }
//   });

/**
 * GET
 * POST
 */

router.get('/post/:id', async (req, res) => {
try {

    const locals = {
        title: "The People's Voice",
        description: "The People, Their Voice, Their Way",
      }


      let dive = req.params.id


      const data = await Post.findById({_id: dive });
      res.render('index', { locals, data });
    } catch (error) {
     console.log(error)
    }
  });


module.exports = router;
