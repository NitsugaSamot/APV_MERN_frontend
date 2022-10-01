import {useState, useEffect} from 'react'
import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const {guardarPaciente, paciente} = usePacientes()

    useEffect(() => {
        if(paciente?.nombre){
            setNombre(paciente.nombre) 
            setPropietario(paciente.propietario) 
            setEmail(paciente.email) 
            setFecha(paciente.fecha) 
            setSintomas(paciente.sintomas) 
            setId(paciente._id) 
        }
    }, [paciente])

    const handleSubmit = e => {
        e.preventDefault()

        //Validar formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        guardarPaciente({nombre, propietario, email, fecha, sintomas, id})//Crea objeto nuevo con esta informacion
        setAlerta({
              msg:'Guardado Correctamente',
              error: false 
        })

        
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
    }

    
    setTimeout(() => {
        setAlerta({})
    }, 3000);

    const {msg} = alerta

  return (
    <>
            <h2 className='font-black text-3xl text-center'>
            Administrador de Pacientes</h2>

              <p className='text-xl mt-5 mb-10 text-center'>
                  Añade tus pacientes y{''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
              </p>

        <form 
            className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
            onSubmit={handleSubmit}
            action="">
            <div className="mb-5">
                <label htmlFor="nombre"
                       className="text-gray-700 uppercase font-bold"
                >
                    Nombre Mascota
                </label>
                <input type="text" 
                       id="mascota"
                       placeholder="Nombre de la Mascota" 
                       className="border-2 w-full p-2 placeholder-gray-400 roubded-md" 
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario"
                       className="text-gray-700 uppercase font-bold"
                >
                    Nombre Propietario
                </label>
                <input type="text" 
                       id="propietario"
                       placeholder="Nombre del Propietario" 
                       className="border-2 w-full p-2 placeholder-gray-400 roubded-md" 
                       value={propietario}
                       onChange={e => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email"
                       className="text-gray-700 uppercase font-bold"
                >
                    Email
                </label>
                <input type="email" 
                       id="email"
                       placeholder="Email" 
                       className="border-2 w-full p-2 placeholder-gray-400 roubded-md" 
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="fecha"
                       className="text-gray-700 uppercase font-bold"
                >
                    Fecha De Alta
                </label>
                <input type="date" 
                       id="fecha"
                       className="border-2 w-full p-2 placeholder-gray-400 roubded-md" 
                       value={fecha}
                       onChange={e => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas"
                       className="text-gray-700 uppercase font-bold"
                >
                    Sintomas
                </label>
                <textarea id="sintomas"
                    placeholder="Describe que sintomas tiene el o la paciente"
                       className="border-2 w-full p-2 placeholder-gray-400 roubded-md" 
                       value={sintomas}
                       onChange={e => setSintomas(e.target.value)}
                />
            </div>

            <input 
                type="submit" 
                value={id ? 'Guardar Cambios' : 'Agregar Paciente'}
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
                    
            />
        </form>

        
        {msg && <Alerta alerta={alerta}/>}
    </>
  )
}

export default Formulario