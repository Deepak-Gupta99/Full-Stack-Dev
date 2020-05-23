const {Posts, Users} = require('../db/models')
async function createNewPost(userId, title, body){
    const post = await Posts.create({
        userId,
        title,
        body
        
    })
    return post
}
//find all post
async function findAllPosts(userId){
    if(userId!==undefined){
        const posts = await Posts.findAll({
            include: [Users],
            where:{userId}
        })
        return posts
    }
    const posts = await Posts.findAll({
        include: [Users]
    })
    return posts
}
module.exports = {
    createNewPost,
    findAllPosts
}
/*
async function test(){
    const all = await findAllPosts()
    all.forEach(t=>{
        console.log(`${t.title} \n auther: ${t.user.username} \n ${t.body}`)
    })
}
test()
*/
/*
async function test(){
    console.log(await createNewPost(
        1,
        'test1',
        'pass by govt'
    ))
}
test()*/

