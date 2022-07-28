import { useFormCreateUpdateLinks } from '@/hooks/form'
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { TravelinkRequestType, Profile } from '@/types/db'

type CardLinkProps = {
  // icon: string
  label: string
  url: string
  index: number
  formType: 'create' | 'update'
  travelinkData?: TravelinkRequestType
  ownerProfile?: Profile
  onClick: () => void
}

export const CardLink = ({
  label,
  url,
  index,
  formType,
  travelinkData,
  ownerProfile,
  onClick
}: CardLinkProps) => {
  const { register, remove, errors } = useFormCreateUpdateLinks(
    formType,
    travelinkData,
    ownerProfile
  )

  const [isMinimum, setState] = useState(true)
  const [currentLabel, setCurrentLabel] = useState(label)

  return (
    <>
      {/* <a href={url} target="_blank" rel="noreferrer"> */}
      {isMinimum ? (
        <Flex
          position={'relative'}
          top={0}
          left={0}
          w={'100%'}
          h={'5.2rem'}
          borderRadius={'10rem'}
          bgColor={'white'}
          filter={'drop-shadow(4px 4px 10px #E4EBEE)'}
          align={'center'}
          marginBottom={'1rem'}
          onClick={() => {
            setState(false)
          }}
        >
          {/* TODO: アイコンPropsの受け取り */}
          <Box
            backgroundColor={'gray'}
            borderRadius={'100%'}
            w={'3.8rem'}
            h={'3.8rem'}
            marginLeft={'0.7rem'}
          />
          <Text
            w={'80%'}
            textAlign={'center'}
            fontSize={'md'}
            overflow={'hidden'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            margin={'0 1.6rem'}
          >
            {currentLabel}
          </Text>
        </Flex>
      ) : (
        <Box>
          <Box
            marginTop={'0.4rem'}
            padding={'1.4rem 1.6rem 0 1.6rem'}
            w={'100%'}
            h={'27.4rem'}
            borderRadius={'1.5rem'}
            bgColor={'white'}
            filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
          >
            {/* TODO:RadioButton実装 */}
            <Menu>
              <Flex>
                <Spacer />
                <MenuButton>
                  <Flex
                    bgColor={'#E8ECF0'}
                    borderRadius={'full'}
                    w={'3.6rem'}
                    h={'3.6rem'}
                    align={'center'}
                    justify={'center'}
                  >
                    <Box
                      bgImage={'/images/menuButton.svg'}
                      w={'2.4rem'}
                      h={'2.4rem'}
                    />
                  </Flex>
                </MenuButton>
              </Flex>

              <MenuList
                padding={'1.35rem 0 0 2.4rem'}
                w={'16.8rem'}
                h={'8.8rem'}
                borderColor={'#CBD5E0'}
                borderRadius={'1.5rem'}
                boxShadow={0}
              >
                <MenuItem
                  display={'flex'}
                  padding={'0 0 1.35rem 0'}
                  onClick={() => {
                    setState(true)
                  }}
                >
                  {/* TODO:表示の最小化の実装 */}
                  <Box
                    bgImage={'/images/closeMenu.svg'}
                    w={'1.5rem'}
                    h={'1.5rem'}
                    marginRight={'1.6rem'}
                  />
                  <Box fontSize={'sm'}>表示を最小化</Box>
                </MenuItem>
                <MenuItem
                  display={'flex'}
                  padding={0}
                  // TODO: removeが仕事しない
                  onClick={onClick}
                >
                  <Box
                    bgImage={'/images/trash.svg'}
                    w={'1.68rem'}
                    h={'1.68rem'}
                    marginRight={'1.6rem'}
                  />
                  <Box
                    as={'button'}
                    fontSize={'sm'}
                    color={'#FF4D4D'}
                    type="button"
                  >
                    削除する
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>

            <Box>カテゴリ</Box>
            <Box>{index}</Box>

            <List>
              <ListItem>
                <FormControl isInvalid={!!errors.links}>
                  <FormLabel h={'1.6rem'} fontSize={'sm'} color={'#2D2D2D'}>
                    URL
                  </FormLabel>
                  <Input
                    marginTop={'0.3rem'}
                    marginBottom={'1.6rem'}
                    variant={'outline'}
                    borderColor={'#ACC1CA'}
                    w={'100%'}
                    h={'4.4rem'}
                    borderRightRadius={'10rem'}
                    borderLeftRadius={'10rem'}
                    isInvalid={errors.links?.[index] ? true : false}
                    {...register(`links.${index}.url`)}
                    defaultValue={url}
                    placeholder={'https://'}
                  />
                  <FormErrorMessage>
                    {errors.links?.[index] &&
                      errors.links?.[index].url?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormLabel
                  display={'flex'}
                  h={'1.6rem'}
                  fontSize={'sm'}
                  color={'#2D2D2D'}
                >
                  <Box>ラベル</Box>
                  <Box color={'gray'}>（任意）</Box>
                </FormLabel>
                <Input
                  marginTop={'0.3rem'}
                  variant={'outline'}
                  borderColor={'#ACC1CA'}
                  w={'100%'}
                  h={'4.4rem'}
                  borderRightRadius={'10rem'}
                  borderLeftRadius={'10rem'}
                  {...register(`links.${index}.label`)}
                  defaultValue={label}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCurrentLabel(e.target.value)
                  }}
                  placeholder={'例）宿泊先'}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      )}

      {/* </a> */}
    </>
  )
}
