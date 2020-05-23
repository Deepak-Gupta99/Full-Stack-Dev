const {Router} = require('express')
const {
    createNewPost,
    findAllPosts
} = require('../../controllers/posts')
const route = Router()

route.post('/', async (req, res)=>{
    const {userId, title, body} = req.body
    if(!userId || !title || !body){
        return res.status(400).send({
            error:'Need userid, title and body to create post'
        })
    }
    const post = await createNewPost(userId, title, body)
    res.status(201).send(post)
})

route.get('/', async (req, res) => {
    const posts = await findAllPosts()
    res.status(200).send(posts)
  })
//get req on id
route.get('/:userId', async (req, res) => {
    const posts = await findAllPosts(req.params.userId)
    res.status(200).send(posts)
})


module.exports = {
    postRoute: route
}

