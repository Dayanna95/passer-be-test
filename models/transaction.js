const { postgresql } = require('../databases/postgresql')

const createTransaction = (pk_transaction,fk_user, description,amount) => {
    try {
        let transaction = postgresql.public.one(`insert into transaction (pk_transaction,fk_user,description,amount) values ('${pk_transaction}', '${fk_user}',  '${description}', '${amount}') returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an specific user
 * @param {number} pk_transaction transaction primary key
 *
 */
 const getTransaction = (pk_transaction) => {

    let transaccion = postgresql.public.one(`select * from transaction where pk_transaction = '${pk_transaction}'`);
    return transaccion
}

const updateTransaction = (pk_transaction,fk_user, description,amount) => {
    try{
        let  user = postgresql.public.one(`update transaction set fk_user = '${fk_user}', description = '${description}', amount = '${amount}' where pk_transaction = '${pk_transaction}' returning *;`);
        return user         

    } catch (e) {
         throw new Error(e)
    }
}


module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction
    
}