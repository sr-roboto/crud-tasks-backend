import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useTasks from '../context/useTasks';
import { useParams, useNavigate } from 'react-router-dom';

function TaskForm() {
  const { register, handleSubmit } = useForm();
  const { getTask, createTask, updateTask } = useTasks();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data);
    console.log(data);

    navigate('/tasks');
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            label="Título"
            type="text"
            placeholder="Título de la tarea"
            {...register('title')}
          />
          <input
            label="Descripción"
            type="text"
            placeholder="Descripción de la tarea"
            {...register('description')}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
