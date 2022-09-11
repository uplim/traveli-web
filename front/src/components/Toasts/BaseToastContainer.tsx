import { ToastContainer } from 'react-toastify'

export const BaseToastContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      closeButton={false}
    />
  )
}
