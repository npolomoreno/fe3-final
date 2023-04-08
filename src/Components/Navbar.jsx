import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import '../Components/Nav.css'
import {MdDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { context, dispatch } = useContext(ContextGlobal)
  const { theme } = context

  const toggleTheme = () => {
    dispatch({ type: "THEME" });
  }

  return (
    <nav className={theme } id= "navBar">
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link className='Links' to="/">  Home    </Link>
      <Link className='Links' to="/favs">  Favorites  </Link>
      <Link className='Links' to="/contact">   Contact us   </Link>     
    <div className='toggle-container'>
    
        <input
          type="checkbox"
          id="toggle-checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme}
        />
      <label className="toggle-label" htmlFor="toggle-checkbox"> 
        <span className='LightMode'> <MdOutlineLightMode size='18px'/> </span>
        <span className='darkMode'> <MdDarkMode size='18px'/> </span>
        <div className="toggle-button">
        </div>
       
      </label>
      
    </div>


    </nav>
  )
}

export default Navbar