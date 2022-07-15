import { FormUpdateLinks } from '@/components/Forms/FormUpdateLinks'
import { useGetTravelink } from '@/hooks/firestore'
import { currentUserState } from '@/recoil/atoms'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

const Edit = () => {
  const { travelink } = useGetTravelink()
  const currentUser = useRecoilValue(currentUserState)
  const router = useRouter()

  useEffect(() => {
    if (!travelink) return
    if (!currentUser) return
    if (currentUser.uid !== travelink.ownerId && !travelink.canEdit)
      router.push('/')
  }, [travelink])

  return (
    <>
      {!travelink ? (
        <>ローディングアイコン</>
      ) : (
        <FormUpdateLinks data={travelink} />
      )}
    </>
  )
}

export default Edit
