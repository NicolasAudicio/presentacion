import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar bg-primary text-white">
        <div className="flex-start p-2">
        <Link to={'/'} className="btn btn-ghost hover:bg-black text-xl">Inicio</Link>
        </div>
        <div className="flex-start">
        <Link to={'/tecnologias'} className="btn btn-ghost hover:bg-black text-xl">Tecnologías</Link>
        </div>
    </div>
  )
}

export default NavBar