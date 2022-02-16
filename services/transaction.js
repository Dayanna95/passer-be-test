const transactionModel = require('../models/transaction')


const createTransaction = async (pk_transaction,fk_user,description, amount) => {
    try {
        return transactionModel.createTransaction(pk_transaction,fk_user,description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

const getTransaction = async (pk_transaction) => {
    try {
        return await transactionModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createTransaction ,
    getTransaction  
}