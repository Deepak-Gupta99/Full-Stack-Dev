const {Users} = require('../db/models')
const {genRandomUsername} = require('../utils/username')
//create user with anon username
async function createAnonUser(){
    const user = await Users.create({
        username: genRandomUsername()
    }) //doubt
    return user
}
//get user by id
async function getUserById(id){
    return await Users.findOne({where:{id}}) //why use id in{}
}
//get user by username
async function getUserByUsername(username){
    return await Users.findOne({where:{username}})
}
module.exports = {
    createAnonUser,
    getUserById,
    getUserByUsername
}


/*
1.create anon user
    a. random username
        1. username generator
    b. id
2. get user by id/username
 */