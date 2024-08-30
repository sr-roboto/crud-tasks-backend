import { Link } from 'react-router-dom';
import useAuth from '../context/useAuth.js';
import { ButtonLink } from './ui/ButtonLink';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="navbar bg-base-300 sticky top-0 font-mono">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>Welcome {user.username}</li>
                  <li>
                    <ButtonLink to="/add-task">Add Task</ButtonLink>
                  </li>
                  <li>
                    <Link to="/" onClick={() => logout()}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                className="btn btn-ghost text-xl"
                to={isAuthenticated ? '/tasks' : '/'}
              >
                QwertyQuick
              </Link>
            </div>
            <p className="text-center">
              Bienvenido: <span className="text-success">{user.username}</span>
            </p>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1  text-base">
                <li>
                  <Link to="/add-task">Add Task</Link>
                </li>
                <li>
                  <Link to="/" onClick={() => logout()}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar bg-base-300 sticky top-0 font-mono flex justify-start">
            {' '}
            {/* Modified line */}
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/login">Iniciar Sesión</Link>
                  </li>
                  <li>
                    <Link to="/register">Registrarse</Link>
                  </li>
                </ul>
              </div>
              <Link
                className="btn btn-ghost text-xl"
                to={isAuthenticated ? '/tasks' : '/'}
              >
                QwertyQuick
              </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1  text-base">
                <li>
                  <Link to="/login">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
