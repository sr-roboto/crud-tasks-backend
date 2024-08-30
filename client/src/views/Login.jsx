import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../context/useAuth';
import { useEffect } from 'react';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, error, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login(data);
      console.log('usuario logueado con exito', data);
      navigate('/tasks');
    } catch (error) {
      console.error('Error logging in', error);
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="card bg-base-100 max-w-sm shrink-0 shadow-xl border-primary border-2">
        <form className="card-body gap-4" onSubmit={onSubmit}>
          {error && (
            <div className="bg-red-900 text-white p-2 rounded-lg font-mono animate-fade-in-out">
              {error.error.map((err, index) => (
                <div className="py-2" key={index}>
                  <span className="font-bold text-red-500">ERROR : </span>
                  <span className="text-slate-200">{err}</span>
                </div>
              ))}
            </div>
          )}
          <div className="form-control ">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Iniciar Sesión
            </button>
          </div>
          <label>
            No estas registrado?
            <Link className="hover:text-secondary" to="/Register">
              {' '}
              Registrate
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login;
