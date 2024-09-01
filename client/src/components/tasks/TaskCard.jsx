import useTasks from '../../context/useTasks';
import { Button, ButtonLink, Card } from '../ui';
import { useEffect } from 'react';
import trash from '../../assets/img/Trash.svg';
import edit from '../../assets/img/Edit.svg';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export function TaskCard({ task }) {
  TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
  };
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl text-base-200 font-bold">{task.title}</h1>
        <div className="flex-col justify-center w-8">
          <button
            className="hover:scale-125"
            onClick={() => deleteTask(task._id)}
          >
            <img src={trash} />
          </button>
          <button className="hover:scale-125">
            <Link to={`/tasks/${task._id}`}>
              <img src={edit} />
            </Link>
          </button>
        </div>
      </header>
      <p className="text-white ">{task.description}</p>
    </Card>
  );
}
