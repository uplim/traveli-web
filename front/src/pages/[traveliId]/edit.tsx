import { FormCreateUpdateLinks } from '@/components/Forms'
import { useRoleEdit } from '@/hooks/role/'

const Edit = () => {
  const { travelink, isLoading } = useRoleEdit()

  return (
    <>
      {!travelink || isLoading ? (
        <>ローディングアイコン</>
      ) : (
        <FormCreateUpdateLinks formType={'update'} travelinkData={travelink} />
      )}
    </>
  )
}

export default Edit
