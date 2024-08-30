import { useEffect } from 'react';
import useTasks from '../context/useTasks';
import TasksCard from '../components/TaskCard';

function Tasks() {
  // Asegurarse de que tasks sea un array
  const { getTasks, tasks } = useTasks();
  console.log(tasks);

  const taskArray = tasks.data || [];

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div>
        <h1>Tasks</h1>
        <TasksCard tasks={taskArray} />
      </div>
    </>
  );
}

export default Tasks;
