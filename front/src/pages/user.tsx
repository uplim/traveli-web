import { FormUserProfile } from '@/components/Forms'
import { Loading } from '@/components/Loadings'
import { useGetUser } from '@/hooks/firestore/user/useGetUser'

const User = () => {
  const { user } = useGetUser()

  return <>{!user ? <Loading /> : <FormUserProfile data={user} />}</>
}

export default User
