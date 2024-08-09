import mysql from 'mysql2/promise';

//creamos la conexion con nuestra base de datos
const connectDb = async () => {
    try {
        const connection = await mysql.createConnection ({
            host:'localhost',
            port: 3306,
            database: 'tasks_db'
        })
        //si la conexion fue exitosa nos devolvera un msg
        console.log('conexion exitosa a la base de datos');
        return connection; //devolvemos la conexion
    } catch(err) {
        console.log(err);
    }
}

export {connectDb};