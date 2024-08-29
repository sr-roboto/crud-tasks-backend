import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="card bg-base-100 max-w-sm shrink-0 shadow-xl border-primary border-2">
        <form className="card-body gap-4">
          <div className="form-control ">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Iniciar Sesión</button>
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
