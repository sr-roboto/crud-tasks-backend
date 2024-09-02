import { useEffect } from 'react';
import useAuth from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Message, Button, Input } from '../components/ui';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-[calc(100vh-10px)] flex items-center justify-center bg-base-200">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <form className="card-body gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <Input
              type="text"
              name="username"
              placeholder="Write your name"
              {...register('username')}
              autoFocus
            />
            {errors.username?.message && (
              <p className="text-red-500">{errors.username?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <Input
              name="email"
              placeholder="youremail@domain.tld"
              {...register('email')}
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <Input
              type="password"
              name="password"
              placeholder="********"
              {...register('password')}
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <Input
              type="password"
              name="confirmPassword"
              placeholder="********"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            )}
            <div className="form-control mt-6">
              <Button>Aceptar</Button>
            </div>
          </div>
        </form>

        <p className="text-center text-base-content">
          Tienes una cuenta?{' '}
          <Link className="text-info-content hover:text-info" to="/login">
            Iniciar
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
