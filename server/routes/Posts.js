const express = require("express")
const router = express.Router()
const {Posts} = require("../models")

router.get("/", async (req,res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});


router.get("/byId/:id", async (req,res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
})
router.post("/", async (req,res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

router.delete("/:postId", async (req, res) => {
    const postId = req.params.postId;
    await Posts.destroy({
      where: {
        id: postId,
      },
    });
  
    res.json("Post deletado com sucesso! ");
  });

  router.put("/:postId", async (req,res) => {
    const id = req.params.postId;
    const post = await Posts.findByPk(id);
    const title = req.body.title;
    const content = req.body.content;
    const tags = req.body.tags;
    await Posts.update(
      {title: title},
      {content: content},
      {tags: tags},
      {where: post}
    )
  });


module.exports = router