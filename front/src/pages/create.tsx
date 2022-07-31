import { FormCreateUpdateLinks } from '@/components/Forms'
import { Loading } from '@/components/Loadings'
import { useGetUser } from '@/hooks/firestore'

const Create = () => {
  const { user } = useGetUser()

  return <>{!user ? <Loading /> : <FormCreateUpdateLinks userData={user} />}</>
}

export default Create
