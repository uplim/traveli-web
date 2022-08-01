import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box
} from '@chakra-ui/react'
import { BookmarkType, TravelinkRequestType } from '@/types/db'
import { CardHome } from '@/components/Cards'
import { TextEmpty } from '@/components/Texts'

type TabHomeProps = {
  data: TravelinkRequestType[]
  bookmarkData: BookmarkType[]
}

export const TabHome = ({ data, bookmarkData }: TabHomeProps) => {
  return (
    <Tabs
      isFitted
      colorScheme={'brandBlue-switch'}
      position={'absolute'}
      top={'calc(18.8rem + 1.8rem)'}
      left={'0'}
      w={'100vw'}
    >
      <TabList color={'gray'}>
        <Tab>全て</Tab>
        <Tab>保存済み</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {data.length === 0 ? (
            <Box mt={'11rem'}>
              <TextEmpty
                msgTop={'まだトラべリンクはありません。'}
                msgBottom={
                  '右下の＋ボタンから旅先で参照したい情報をまとめたトラべリンクを作ってみよう！'
                }
              />
            </Box>
          ) : (
            <>
              {data.map((item) => (
                <CardHome data={item} key={item.id} />
              ))}
              <Heading fontSize={'lg'} mt={'3rem'}>
                保存済み
              </Heading>
              {bookmarkData.map((item) => (
                <CardHome data={item} key={item.id} />
              ))}
            </>
          )}
        </TabPanel>
        <TabPanel>
          {bookmarkData.length === 0 ? (
            <Box mt={'11rem'}>
              <TextEmpty
                msgTop={'まだ保存したトラべリンクはありません。'}
                msgBottom={'共有してもらったトラべリンクの保存ボタンを押そう！'}
              />
            </Box>
          ) : (
            <>
              {bookmarkData.map((item) => (
                <CardHome data={item} key={item.id} />
              ))}
            </>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
