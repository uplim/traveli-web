import { Button, ButtonIconRound } from '@/components/Buttons'
import { IconPlus } from '@/components/Icons'
import { Input } from '@chakra-ui/react'

const Create = () => {
  return (
    <>
      <Button>作成する</Button>
      <ButtonIconRound>
        <IconPlus w={'2.4rem'} h={'2.4rem'} color={'white'} />
      </ButtonIconRound>
    </>
  )
}

export default Create
