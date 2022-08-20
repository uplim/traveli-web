import { FormCreateUpdateUser } from '@/components/Forms'
import { Loading } from '@/components/Loadings'
import { useGetUser } from '@/hooks/firestore'

const User = () => {
  const { user, currentUser } = useGetUser()

  return (
    <>
      {!user || !currentUser ? (
        <Loading />
      ) : (
        <FormCreateUpdateUser data={user} />
      )}
    </>
  )
}

export default User
