import { useCheckAuth } from '@/hooks/auth'
import { Loading } from '@/components/Loadings'

type CheckAuthProps = {
  children: React.ReactNode
}

export const CheckAuth = ({ children }: CheckAuthProps) => {
  const { isAccessibleBeforeSignIn, isLogin, isLoading, isLogout } =
    useCheckAuth()

  return (
    <>
      {isAccessibleBeforeSignIn || (isLogin && !isLoading) || isLogout ? (
        <>{children}</>
      ) : (
        <Loading />
      )}
    </>
  )
}
