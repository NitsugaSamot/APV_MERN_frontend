
const Footer = () => {
    return (
      <footer className="py-10">
        <p className="text-center font-bold">
          APV - Administrador de Pacientes de {''}
          <span className="text-green-600">Veterinaria</span>
        </p>

        <a 
          href="https://portafolio-tomas-lona.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center mt-4"
        >
          <span className="text-gray-700 font-semibold mb-2">
            Sitio web de mi portafolio
          </span>

          <img
            src="/assets/img/tommy.png"
            alt="No Image"
            width={75}
            height={75}
            className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </a>
      </footer>

    )
  }
  
  export default Footer