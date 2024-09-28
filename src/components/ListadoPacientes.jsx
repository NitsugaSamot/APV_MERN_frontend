import usePacientes from '../hooks/usePacientes'
import Paciente from './Paciente'

const ListadoPacientes = () => {

  const { pacientes } = usePacientes()

  return (
    <>
        {pacientes.length ? 
          (
            <>
              <h2 
              className='font-black text-3xl text-center'>
              Listado de Pacientes</h2>

              <p className='text-xl mt-5 mb-10 text-center'>
                  Administra tus {''}
                <span className='text-green-600 font-bold'>Pacientes y Citas</span>
              </p>

            {pacientes.map(paciente => (
              <Paciente
                  key={paciente._id}
                  paciente={paciente}
              />
            ))}

            </>       
          ): 
          (
            <>
              <h2 
              className='font-black text-3xl text-center'>
              No tiene pacientes registrados</h2>

              <p className='text-xl mt-5 mb-10 text-center'>
                Comienza agregando pacientes {''}
                <span className='text-green-600 font-bold'>y aparecerán en esta sección</span>
              </p>
            </>
          )}
    </>
  )
}

export default ListadoPacientes