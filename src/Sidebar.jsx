import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import './App.css'
import sublinks from './data'
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((item) => {
          const { links, page, pageId } = item
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map((link) => {
                  const { url, icon, label, id } = link
                  return (
                    <a key={id} href={url}>
                      {icon}
                      {label}
                    </a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
