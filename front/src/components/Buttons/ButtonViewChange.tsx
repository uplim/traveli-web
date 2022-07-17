import { IconViewGrid, IconViewList } from '../Icons'
import { useBoolean } from '@chakra-ui/react'

export const ButtonViewChange = ({ ...props }) => {
  const [isListView, setIsListView] = useBoolean(false)

  const onSubmit = () => {
    if (isListView) {
      setIsListView.off()
    } else {
      setIsListView.on()
    }
  }

  return (
    <>
      {isListView ? (
        <IconViewList {...props} w={'2.5rem'} h={'2.5rem'} onClick={onSubmit} />
      ) : (
        <IconViewGrid {...props} w={'2.5rem'} h={'2.5rem'} onClick={onSubmit} />
      )}
    </>
  )
}
