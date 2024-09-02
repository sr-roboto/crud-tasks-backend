import { Link } from 'react-router-dom';
import PanicButton from '../components/ui/PanicButton';
import img from '../assets/img/creator.svg';

function Home() {
  return (
    <div className="md:mx-auto bg-base-300 glass">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center">
          <img
            src={img}
            className=" mx-auto rounded-lg w-screen animate size-min-w lg:w-1/3 md:w-1/2 sm:w-1/3"
          />
          <div className="gap-2 space-y-4 ">
            <p className=" min-h-2 break-words prose font-light lg:text-left text-2xl text-center ">
              Este proyecto está siendo desarrollado para el{' '}
              <span className="text-info-content text-opacity-75 hover:text-info transition duration-300">
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
      <PanicButton className="justify-center items-cente" />
    </div>
  );
}

export default Home;
