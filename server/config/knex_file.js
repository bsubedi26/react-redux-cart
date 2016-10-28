let dbConfig = {
    client: 'pg',
    connection: {
        host     : 'localhost',
        user     : 'postgres',
        password : 'root',
        database : 'sample_db',
        charset: 'utf8'
    }
}

let knex = require('knex')(dbConfig);

export default knex;