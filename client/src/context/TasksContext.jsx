import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
} from '../api/tasksRequest';

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res);

      return res;
    } catch (error) {
      console.log('Error creating task', error);
      return undefined;
    }
  };

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error('Error fetching task', error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task);
      return res;
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log(res);

      return res;
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        getTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TasksProvider, TasksContext };
