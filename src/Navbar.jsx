import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'
import './App.css'
import Navlinks from './Navlinks'

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }

  return (
    <nav onMouseOver={handleSubMenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <Navlinks />
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
