import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'
import clienteAxios from '../config/axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const {setAuth} = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })

      return
    }

    try {
      const {data} = await clienteAxios.post('/veterinarios/login', {email, password})
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate('/admin')
      
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
    <img
      src="/assets/img/logo3d.png"
      alt="No Image"
      width={250}
      height={250}
    />
    <h1 className="text-green-600 mt-4 font-black text-3xl">
      Inicia Sesión para administrar tus {''}
      <span className="text-black">Pacientes</span>
    </h1>
    
    <p className="text-gray-700 bg-gray-100 p-4 mt-2 rounded-lg shadow-md text-center">
      <strong className="text-black">
        Este es un sitio de prueba de mi{' '}
        <a 
          href="https://portafolio-tomas-lona.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Portafolio Web
        </a>
        :{' '}
      </strong> 
      Puede ingresar con el usuario <strong>invitado@invitado.com</strong> y contraseña <strong>InvitadoAppAPV</strong>, o si lo desea, puede crear su propia cuenta.
  </p>

  </div>

  <div className="mt-5 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
    {msg && <Alerta alerta={alerta} />}

    <form onSubmit={handleSubmit} action="">
      <div className="my-5">
        <label className="uppercase text-gray-600 block text-xl font-bold">
          Email
        </label>
        <input
          type="email"
          placeholder="Email de Registro"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="my-5">
        <label className="uppercase text-gray-600 block text-xl font-bold">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Iniciar Sesión"
        className="bg-green-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-green-800 md:w-auto"
      />
    </form>

    <nav className="mt-10 lg:flex lg:justify-between">
      <Link
        className="block text-center my-5 text-gray-500"
        to="/registrar"
      >
        ¿No tienes cuenta? Registrate
      </Link>
      <Link
        className="block text-center my-5 text-gray-500"
        to="/olvide-password"
      >
        Olvide mi Password
      </Link>
    </nav>
  </div>
</>

  )
}

export default Login