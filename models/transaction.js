const { postgresql } = require('../databases/postgresql')

const createTransaction = (pk_transaction,fk_user, description,amount) => {
    try {
        let user = postgresql.public.one(`insert into transaction (pk_transaction,fk_user,description,amount) values ('${pk_transaction}', '${fk_user}',  '${description}', '${amount}') returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}


module.exports = {
    createTransaction
    
}