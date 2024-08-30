import useAuth from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, Message, Button, Input } from '../components/ui';
import { loginSchema } from '../schemas/auth';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}

        <h1 className="text-3xl text-center font-bold">Iniciar Sesión</h1>
        <form className="card-body gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <Input
              label="Write your email"
              type="email"
              name="email"
              placeholder="youremail@domain.tld"
              {...register('email', { required: true })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-control ">
            <Input
              type="password"
              name="password"
              placeholder="Write your password"
              {...register('password', { required: true, minLength: 6 })}
            />
            <p>{errors.password?.message}</p>
            <div className="form-control mt-6">
              <Button>Aceptar</Button>
            </div>
          </div>
        </form>

        <p className="text-center">
          No estas registrado?{' '}
          <Link to="/register" className="text-sky-500">
            Registrate
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Login;
