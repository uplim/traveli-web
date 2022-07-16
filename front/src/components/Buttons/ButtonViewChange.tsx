import { IconViewGrid, IconViewList } from '../Icons'
import { useBoolean } from '@chakra-ui/react'

export const ButtonViewChange = () => {
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
        <IconViewList w={'2.5rem'} h={'2.5rem'} onClick={onSubmit}/>
      ) : (
        <IconViewGrid w={'2.5rem'} h={'2.5rem'} onClick={onSubmit}/>
      )}
    </>
  )
}
