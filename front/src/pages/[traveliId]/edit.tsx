import { FormUpdateLinks } from '@/components/Forms/FormUpdateLinks'
import { useRoleEdit } from '@/hooks/role/'

const Edit = () => {
  const { travelink, isLoading } = useRoleEdit()

  return (
    <>
      {!travelink || isLoading ? (
        <>ローディングアイコン</>
      ) : (
        <FormUpdateLinks data={travelink} />
      )}
    </>
  )
}

export default Edit
