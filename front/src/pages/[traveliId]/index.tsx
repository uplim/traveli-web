import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'

const LinkList = () => {
  const router = useRouter()
  const traveliId = router.query.traveliId

  return (
    <>
      <Box>{traveliId}のぺーじ！</Box>
    </>
  )
}

export default LinkList
