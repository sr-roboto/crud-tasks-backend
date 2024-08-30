import axios from './axios.js';

const createTaskRequest = async () => {
  try {
    const response = await axios.post('/tasks');
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTasksRequest = async () => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getTaskRequest = async (id) => {
  try {
    const response = await axios.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const updateTaskRequest = async (id, task) => {
  try {
    const response = await axios.put(`/tasks/${id}`, task);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTaskRequest = async (id) => {
  try {
    const response = await axios.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  createTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
};
