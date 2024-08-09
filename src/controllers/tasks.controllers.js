import {connectDb} from '../database/db.js';


//CRUD
export const crearTareas = async (req, res) => {
    const { title, description, isComplete } = req.body;
    const connection = await connectDb();
    try {
        const sql = `INSERT INTO tasks (title, description, isComplete) VALUES (?,?,?)`;
        await connection.query(sql, [title, description, isComplete]);
        res.status(201).send('tarea creada con exito');
    } catch (err) {
        return res.status(500).send("Error al crear la tarea");
    } finally {
        if (connection) connection.end(); //cerramos la conexion
    }
}

export const obtenerTareas = async (req, res) => {
    const connection = await connectDb();
    try {
        const sql = `SELECT * FROM tasks`;
        const [result] = await connection.query(sql)
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).send('error al obtener las tareas');
    } finally {
        if (connection) connection.end(); //cerramos la conexion
    }
}

export const obtenerTarea = async (req, res) => {
    const user = req.params['id'];
    const connection = await connectDb();
    try {
        const sql = `SELECT * FROM tasks WHERE id = ?`;
        const [result] = await connection.query(sql, user);
        if (result === 0) {
            return res.status(404).send('tarea no encontrada');
        }
        return res.status(200).json(result[0]);
    } catch (err) {
        return res.status(500).send('error al obtener tarea')
    } finally {
        if (connection) connection.end(); //cerramos la conexion
    }
}

export const actualizarTarea = async (req, res) => {
    const user = req.params['id'];
    const { title, description, isComplete } = req.body;
    const connection = await connectDb();
    try {
        const sql = `UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?`;
        const [result] = await connection.query(sql, [title, description, isComplete, user]);
        if (result.affectedRows === 0) {
            return res.status(404).send('tarea no encontrada')
        }
        res.status(200).send();
    } catch (err) {
        return res.status(500).send('error al editar tarea');
    } finally {
        if (connection) connection.end() //cerramos la conexion
    }
}

export const eliminarTarea = async (req, res) => {
    const {id} = req.params;
    const connection = await connectDb();
    const [result] = await connection.query('SELECT * FROM tasks WHERE id = ?', id);
    try {
        if(id == result[0].id) {
            await connection.query('DELETE FROM tasks WHERE id = ?', id)
            return res.status(200).send('tarea eliminada correctamente');   
        }
        return res.status(404).send('tarea no encontrada')
    } catch (err) {
        return res.status(500).send('error al eliminar la tarea');
    } finally {
        if (connection) connection.end(); //cerramos la conexion
    }
}


