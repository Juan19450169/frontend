import Carousel from "../components/Carousel"

function HomePage() {
  return (
    <div>
      <div className="mb-5">
        <Carousel />
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-800 max-w-md w-full p-10 rounded-md">
          <h1 className="text-3xl font-bold my-3 text-center">SOTP</h1>
          <h2 className="text-xl font-bold my-3 text-center">Seguridad en aplicaciones web</h2>
          <p className="gap-x-2 text-justify pt-5 mt-5 text-sm">
            Este sistema ha sido creado para la Materia Seguridad en aplicaciones web.
          </p>
          <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
          <p className="text-center text-xs">
            Derechos Reservados JLEM &#9400; 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
