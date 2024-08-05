const mysql = require('mysql2/promise');

const connectDb = async () => {
    try {
        const connection = await mysql.createConnection ({
            host:'localhost',
            port: 3306,
            database: 'tasks_db'
        })
        console.log('conexion exitosa a la base de datos');
        return connection;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    connectDb
}