import { Link } from 'react-router-dom';
import img from '../assets/droll.svg';

function Home() {
  return (
    <div className="md:mx-auto ">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm rounded-lg w-screen animate-bounce"
          />
          <div className="gap-5 space-y-4">
            <h1 className="text-5xl font-bold">¡Un forastero!</h1>
            <p className=" min-h-2 break-words prose font-light text-lg">
              Este proyecto está siendo desarrollado para el{' '}
              <span className="text-secondary text-opacity-75 hover:text-opacity-100 transition-opacity">
                <Link to="https://ipf.edu.ar/">
                  Instituto Polocientífico de Formosa
                </Link>
              </span>
              , con el objetivo de gestionar tareas de manera eficiente mediante
              una aplicación backend basada en CRUD. Se busca optimizar la
              administración y el seguimiento de tareas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
