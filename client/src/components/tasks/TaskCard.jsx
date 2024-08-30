import useTasks from '../../context/useTasks';
import { Button, ButtonLink, Card } from '../ui';

import PropTypes from 'prop-types';

export function TaskCard({ task }) {
  TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
  };
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(task._id)}>Delete</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
    </Card>
  );
}
