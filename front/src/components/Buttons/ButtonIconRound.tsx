import { forwardRef } from '@chakra-ui/react'
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { Button } from '@/components/Buttons'
import { IconEdit, IconReturn, IconMenu, IconPlus } from '@/components/Icons'

type ButtonIconRoundProps = {
  iconType: 'return' | 'edit' | 'menu' | 'plus'
}

export const ButtonIconRound = forwardRef<
  ChakraButtonProps & ButtonIconRoundProps,
  'button'
>(({ iconType, ...props }, ref) => {
  return (
    <>
      {iconType === 'plus' ? (
        <Button {...props} ref={ref} variant={'iconRound'}>
          <IconPlus w={'2.4rem'} h={'2.4rem'} color={'white'} />
        </Button>
      ) : (
        <Button
          {...props}
          ref={ref}
          variant={'iconRound'}
          bgColor={'white'}
          w={'4rem'}
          h={'4rem'}
        >
          {iconType === 'return' && (
            <IconReturn w={'2.4rem'} h={'2.4rem'} color={'black'} mt={'.4rem'} />
          )}
          {iconType === 'edit' && (
            <IconEdit w={'1.8rem'} h={'1.8rem'} color={'logo-black'} />
          )}
          {iconType === 'menu' && (
            <IconMenu w={'2rem'} h={'2rem'} color={'logo-black'} />
          )}
        </Button>
      )}
    </>
  )
})
