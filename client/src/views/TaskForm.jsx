import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Input } from '../components/ui';
import useTasks from '../context/useTasks';
import { Textarea } from '../components/ui/Textarea';
import { useForm } from 'react-hook-form';

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, data);
      } else {
        createTask(data);
      }

      navigate('/tasks');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      const loadTask = async () => {
        const task = await getTask(params.id);
        setValue('title', task.title);
        setValue('description', task.description);
      };
      loadTask();
    }
  }, [params.id, setValue, getTask]);

  return (
    <div className="h-[calc(100vh-10px)] flex items-center justify-center bg-base-200">
      <Card>
        <form className="card-body gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <Input
              type="text"
              name="title"
              placeholder="Title"
              {...register('title')}
              autoFocus
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">
                Please enter a title.
              </p>
            )}
          </div>
          <div className="form-control ">
            <Textarea
              name="description"
              id="description"
              rows="3"
              placeholder="Description"
              {...register('description')}
            ></Textarea>
          </div>
          <div className="form-control ">
            <Button>Guardar</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default TaskForm;
