import { useEffect } from 'react';
import useTasks from '../context/useTasks';
import { TaskCard } from '../components/tasks/TaskCard';
import { ImFileEmpty } from 'react-icons/im';

function Tasks() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className=" bg-base-100glass">
        {tasks.length === 0 && (
          <div className="flex justify-center items-center p-10 m-10">
            <div>
              <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 m-5 max-h-svh ">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tasks;
