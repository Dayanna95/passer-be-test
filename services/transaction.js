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

const getTransactions = async (fk_user) => {
    try {
        return await transactionModel.getTransactions(fk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}

const updateTransaction = async (pk_transaction,fk_user,description, amount) => {
    try {
        return transactionModel.updateTransaction(pk_transaction,fk_user,description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createTransaction ,
    getTransaction ,
    updateTransaction,
    getTransactions
}