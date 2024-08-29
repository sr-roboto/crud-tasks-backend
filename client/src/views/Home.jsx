import { Link } from 'react-router-dom';
import img from '../assets/droll.svg';

function Home() {
  return (
    <div className="md:mx-auto font-mono ">
      <div className="hero bg-base-200 min-h-screen bg-gradient-to-b from-stone-900 to-stone-950">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg w-screen" />
          <div className=" ">
            <h1 className="text-5xl font-black">¡Un forastero!</h1>
            <p className="py-6 min-h-2 break-words prose font-extralight text-lg">
              Este proyecto está siendo desarrollado para el{' '}
              <span className="text-lime-500">
                <Link to="https://ipf.edu.ar/">
                  Instituto Polocientífico de Formosa
                </Link>
              </span>
              , con el objetivo de gestionar tareas de manera eficiente mediante
              una aplicación backend basada en CRUD. Se busca optimizar la
              administración y el seguimiento de tareas.
            </p>
            <button className="btn btn-primary ">
              <Link to="/Login">Comenzar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
