import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Summary } from '../components/Summary'
import { useQuiosco } from '../hooks/useQuiosco'
import Modal from 'react-modal'
import { ModalProduct } from '../components/product/ModalProduct'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

export const Layout = () => {

  const { modal } = useQuiosco()
  
  return (
    <>
      <div className='md:flex'>
          <Sidebar/>
          <main className='flex-1 h-screen p-3 overflow-y-scroll bg-gray-100'>
            <Outlet />
          </main>
          <Summary/>
      </div>

      {
        modal && (
          <Modal isOpen={ modal } style={ customStyles }>
            <ModalProduct />
          </Modal>
        )
      }
    </>
  )
}
