import { taskModel } from '../models/task.model.js';

const createTask = async (req, res) => {
  try {
    const task = new taskModel(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    await taskModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { createTask, getTasks, getTask, updateTask, deleteTask };
