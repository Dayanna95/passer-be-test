const users = require('../services/users')

const getUser = async (req, res, next) => {
    const { pk_user } = req.params
    try {
        let user = await users.getUser(pk_user)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const createUser = async (req, res, next) => {
    const { pk_user, name } = req.body
    try {
        let user = await users.createUser(pk_user, name)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const updateUser = async (req,res,next) => { //endpoint que actualiza datos
    
    const {pk_user} = req.params
    const {name, status} = req.body

    try{
        
        let user = users.updateUser(pk_user, name, status)

    } catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }

}

module.exports = {
    getUser,
    createUser,
    updateUser
}