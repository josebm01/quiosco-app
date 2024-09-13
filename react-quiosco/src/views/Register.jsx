import { Link } from "react-router-dom"

export const Register = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-md">
        <form action="">
          
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">Nombre:</label>
            <input 
              id="name" 
              name="name"
              type="text" 
              className="w-full p-3 mt-2 rounded-md bg-gray-50"
              placeholder="Tu nombre"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email:</label>
            <input 
              id="email" 
              name="email"
              type="text" 
              className="w-full p-3 mt-2 rounded-md bg-gray-50"
              placeholder="Tu email"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Contraseña:</label>
            <input 
              id="password" 
              name="password"
              type="password" 
              className="w-full p-3 mt-2 rounded-md bg-gray-50"
              placeholder="Tu password"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">Repetir contraseña:</label>
            <input 
              id="password_confirmation" 
              name="password"
              type="password" 
              className="w-full p-3 mt-2 rounded-md bg-gray-50"
              placeholder="Repite contraseña"
            />
          </div>

          <input 
            type="submit" 
            value="Crear cuenta"
            className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-800"
          />
          
        </form>
      </div>

      <nav className='mt-5'>
        <Link to="/auth/login">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  )
}
