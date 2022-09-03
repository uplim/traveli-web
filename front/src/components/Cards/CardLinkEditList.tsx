import { useState } from 'react'
import {
  FieldArrayWithId,
  FieldErrors,
  UseFormRegister,
  UseFieldArrayAppend
} from 'react-hook-form'
import type { Inputs } from '@/hooks/form/useFormCreateUpdateLinks'
import { LinkType } from '@/types/db'
import { Box, Flex } from '@chakra-ui/react'
import { CardLinkEdit } from '@/components/Cards'

type CardLinkEditListProps = {
  fileds: FieldArrayWithId<Inputs, 'links', 'id'>[]
  errors?: FieldErrors<LinkType[]>
  register: UseFormRegister<Inputs>
  append: UseFieldArrayAppend<Inputs, 'links'>
  currentLinks: LinkType[]
}

export const CardLinkEditList = ({
  fileds,
  errors,
  register,
  append,
  currentLinks
}: CardLinkEditListProps) => {
  // リンクを追加ボタンを押すと、今開いてるeditは全部閉じたい
  const [isClickNext, setIsClickNext] = useState(false)

  return (
    <>
      {fileds.map((item, index) => (
        <CardLinkEdit
          key={item.id}
          error={errors?.[index]}
          register={register}
          index={index}
          isClickNext={isClickNext}
          fields={fileds}
          currentLink={currentLinks[index]}
          setIsClickNext={setIsClickNext}
        />
      ))}
      <Flex
        align={'center'}
        justify={'center'}
        marginTop={'1.6rem'}
        color={'brandBlue'}
      >
        <Box bgImage={'/images/plus.svg'} w={'2.4rem'} h={'2.4rem'} />
        <Box
          as={'button'}
          fontSize={'md'}
          type={'button'}
          onClick={() => {
            append({ url: '', label: '', category: 'その他' })
            setIsClickNext(true)
          }}
        >
          リストの追加
        </Box>
      </Flex>
    </>
  )
}
