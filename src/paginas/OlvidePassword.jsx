import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"
import useAuth from "../hooks/useAuth"

const OlvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const {auth} = useAuth()
  
  console.log(auth)

  const handleSubmit = async e => {
      e.preventDefault()

      if(email === '' || email.length < 5) {
        setAlerta({msg: 'Email Obligatorio', error: true})
        return
      }

      try {

        const {data} = await clienteAxios.post('/veterinarios/olvide-password',{email})

        console.log(data)

        setAlerta({msg: data.msg})

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
  }

  const {msg} = alerta

  return (
    <>
        <div>
            <h1 className="text-green-600 font-black text-6xl">
            Recupera tu Password para Acceder a {''}
            <span className="text-black">tus Pacientes</span> </h1>
        </div>  

        <div className='mt-5 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
              {msg && <Alerta
                alerta = {alerta}
              />}
            
            
            <form action=""
                  onSubmit={handleSubmit}
            >
              <div className="my-5">                
                  <label 
                      className="uppercase text-gray-600 block text-xl font-bold"
                      htmlFor="">
                      Email

                  </label>

                  <input 
                      type="email" 
                      placeholder="Email de Registro"
                      className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                      value={email}
                      onChange = {e => setEmail(e.target.value)}
                  />
              </div>

              <input 
                type="submit" 
                value="Recuperar Cuenta"
                className="bg-green-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-green-800 md:w-auto"
              />
            </form>

            <nav className='mt-10 lg:flex lg:justify-between'>
              <Link 
                  className='block text-center my-5 text-gray-500'
                  to="/">¿Ya tienes cuenta? Inicia Sesión
              </Link>
              <Link 
                  className='block text-center my-5 text-gray-500'
                  to="/registrar">¿No tienes cuenta? Registrate</Link>

          </nav>
          </div>
    </>
    
  )
}

export default OlvidePassword