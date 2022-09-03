import { useState } from 'react'
import {
  FieldArrayWithId,
  FieldErrors,
  UseFormRegister,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormSetValue
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
  remove: UseFieldArrayRemove
  currentLinks: LinkType[]
  setValue: UseFormSetValue<Inputs>
}

export const CardLinkEditList = ({
  fileds,
  errors,
  register,
  append,
  remove,
  currentLinks,
  setValue
}: CardLinkEditListProps) => {
  // リンクを追加ボタンを押すと、今開いてるeditは全部閉じたい
  const [isClickNext, setIsClickNext] = useState(currentLinks ? true : false)
  const defaultLinks = {
    category: 'その他',
    url: '',
    label: ''
  } as const

  return (
    <>
      {fileds.map((item, index) => (
        <CardLinkEdit
          remove={remove}
          key={item.id}
          error={errors?.[index]}
          register={register}
          index={index}
          isClickNext={isClickNext}
          fields={fileds}
          currentLink={!currentLinks ? defaultLinks : currentLinks[index]}
          setIsClickNext={setIsClickNext}
          setValue={setValue}
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
