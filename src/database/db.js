const mysql = require('mysql2');

const connectDb = async () => {
    try {
        const connection = await mysql.createConnection
    } catch(err) {
        console.log(err);
    }
}