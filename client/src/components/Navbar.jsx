import { Link } from 'react-router-dom';
import useAuth from '../context/useAuth.js';
import plus from '../assets/img/Plus.svg';
import LogOut from '../assets/img/Logout.svg';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="navbar bg-secondary text-secondary-content-content sticky top-0">
            <div className="navbar-start bg-secondary text-secondary-content">
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
                  className="menu menu-sm dropdown-content bg-secondary text-secondary-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/add-task">
                      <img src={plus} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => logout()}>
                      <img src={LogOut} />
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
            <div className="navbar-end hidden bg-secondary text-secondary-content lg:flex">
              <ul className="menu menu-horizontal px-1  text-base flex">
                <li>
                  <Link to="/add-task">
                    <img src={plus} />
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => logout()}>
                    <img src={LogOut} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar bg-secondary text-secondary-content sticky top-0 flex justify-start">
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
                  className="menu menu-sm dropdown-content text-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
              <ul className="menu menu-horizontal px-1 flex">
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
