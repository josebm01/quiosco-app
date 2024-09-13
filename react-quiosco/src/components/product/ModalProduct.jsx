import { useQuiosco } from '../../hooks/useQuiosco'

export const ModalProduct = () => {

    const { handleModal } = useQuiosco()

  return (
    <>
        <p>Desde modal</p>
            <button onClick={ handleModal }>
              Cerrar
        </button>
    </>
  )
}
