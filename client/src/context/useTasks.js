// useTasks.js
import { useContext } from 'react';
import { TaskContext } from './TaskContext';

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};

export default useTasks;
