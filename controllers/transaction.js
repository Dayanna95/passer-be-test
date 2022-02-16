const transaction = require('../services/transaction')


const createTransaction = async (req, res, next) => {//endpoint para crear nuevas transacciones
    const { pk_transaction,fk_user,description,amount} = req.body
    try {
        let transaction = transaction.createTransaction(pk_transaction,fk_user,description,amount)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


module.exports = {
   createTransaction
}