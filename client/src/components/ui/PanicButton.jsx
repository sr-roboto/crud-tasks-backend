import Siren from '../../assets/img/Siren.svg';
import panicSound from '../../assets/sounds/panic.mp3';

const PanicButton = () => {
  const handlePanic = () => {
    // Reproducir el sonido de pánico
    const audio = new Audio(panicSound);
    audio.play();
  };

  return (
    <button
      className="btn-neutral text-primary hover:animate-pulse hover:scale-125 transition-transform:duration-300"
      onClick={handlePanic}
    >
      <img src={Siren} />
      ¡Pánico!
    </button>
  );
};

export default PanicButton;
