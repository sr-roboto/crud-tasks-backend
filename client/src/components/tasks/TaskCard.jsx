import useTasks from '../../context/useTasks';
import { Card, Label } from '../ui';
import trash from '../../assets/img/Trash.svg';
import edit from '../../assets/img/Edit.svg';
import { Link } from 'react-router-dom';

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <div className=" float-right flex flex-col space-y-4 justify-center items-center ">
        <button
          className="hover:scale-125 transition duration-150"
          onClick={() => deleteTask(task._id)}
        >
          <img src={trash} />
        </button>
        <button className="hover:scale-125 transition duration-150">
          <Link to={`/tasks/${task._id}`}>
            <img src={edit} />
          </Link>
        </button>
      </div>

      <div className="max-w-96  break-all">
        <Label>Título:</Label>
        <h1 className="text-xl text-base-200 font-bold ">{task.title}</h1>

        <Label>Descripción:</Label>
        <p className="text-white ">{task.description}</p>

        <Label>Estado:</Label>
        <p className="text-white  max-w-80">
          {task.done ? 'Terminado' : 'Pendiente'}
        </p>
      </div>
    </Card>
  );
}
