import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Summary } from '../components/Summary'

export const Layout = () => {
  return (
    <div className='md:flex'>
        <Sidebar/>
        
        <main className='flex-1 h-screen p-3 overflow-y-scroll bg-gray-100'>
          <Outlet />
        </main>

        <Summary/>
    </div>
  )
}
