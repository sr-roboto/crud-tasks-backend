import useTasks from '../context/useTasks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TasksCard({ tasks }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between items-center">
            <div>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <div>
              <Link
                to={`/tasks/${task._id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Editar
              </Link>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

TasksCard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TasksCard;
