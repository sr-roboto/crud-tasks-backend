const { connectDb } = require('../database/db.js');
const ctrl = {};

//CRUD
ctrl.crearTareas = async (req, res) => {
    const { title, description, isComplete } = req.body;
    if (!title.trim() || !description.trim() || title.length > 255 || typeof isComplete !== "boolean") {
        let msg = "el titulo y la descripcion no pueden estar vacios";
        if (typeof isComplete !== "boolean") {
            msg = "tipo de dato incorrecto"
        }
        if (title.length > 255) {
            msg = "el titulo o puede tener mas de 255 caracteres "
        }
        return res.status(400).send(msg);
    }
    const connection = await connectDb();
    try {
        const sql = `INSERT INTO tasks (title, description, isComplete) VALUES (?,?,?)`;
        await connection.query(sql, [title, description, isComplete]);
        res.status(201).send('tarea creada con exito');
    } catch (err) {
        return res.status(500).send("Error al crear la tarea");
    } finally {
        if (connection) connection.end();
    }
}

ctrl.obtenerTareas = async (req, res) => {
    const connection = await connectDb();
    try {
        const sql = `SELECT * FROM tasks`;
        const [result] = await connection.query(sql)
        return res.status(200).json(result[0]);
    } catch (err) {
        return res.status(500).send('error al obtener las tareas');
    } finally {
        if (connection) connection.end();
    }
}

ctrl.obtenerTarea = async (req, res) => {
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
        if (connection) connection.end();
    }
}

ctrl.actualizarTarea = async (req, res) => {
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
        if (connection) connection.end()
    }
}

ctrl.eliminarTarea = async (req, res) => {
    const user = req.params['id'];
    const connection = await connectDb();
    try {
        const sql = `DELETE * FROM tasks WHERE id = ?`;
        const [result] = await connection.query(sql, user);
        if (result.affectedRows === 0) {
            return res.status(404).send('tarea no encontrada')
        }
        return res.status(200).send('tarea eliminada correctamente');
    } catch (err) {
        return res.status(500).send('error al eliminar la tarea');
    } finally {
        if (connection) connection.end();
    }
}

module.exports = ctrl;
