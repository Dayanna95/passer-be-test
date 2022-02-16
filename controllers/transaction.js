const transaction = require('../services/transaction')


const createTransaction = async (req, res, next) => {//endpoint para crear nuevas transacciones
    const { pk_transaction,fk_user,description,amount} = req.body
    try {
        let transactions = transaction.createTransaction(pk_transaction,fk_user,description,amount)
        res.status(200).send(transactions)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getTransaction = async (req, res, next) => {
    const { pk_transaction } = req.params
    try {
        let transactions = await transaction.getTransaction(pk_transaction)
        res.status(200).send(transactions)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const updateTransaction = async (req,res,next) => { //endpoint que actualiza datos
    
    const {pk_transaction} = req.params
    const {fk_user, description,amount} = req.body

    try{
        
        let transaccions = transaction.updateTransaction(pk_transaction,fk_user, description,amount)
        res.status(200).send(transaccions)
        next()

    } catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }

}

module.exports = {
   createTransaction,
   getTransaction,
   updateTransaction
}