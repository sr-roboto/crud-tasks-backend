import { axios } from './axios.js';

const createTask = async () => {
  try {
    const response = await axios.post('/tasks');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTasks = async () => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getTask = async (task) => {
  try {
    const response = await axios.get(`/tasks/${task.id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const updateTask = async (task) => {
  try {
    const response = await axios.put(`/tasks/${task.id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (task) => {
  try {
    const response = await axios.delete(`/tasks/${task.id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { createTask, getTasks, getTask, updateTask, deleteTask };
