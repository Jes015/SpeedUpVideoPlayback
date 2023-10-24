import { Header, Main } from '@/components'
import { Flex } from '@radix-ui/themes'

export default function MyApp () {
  return (
    <Flex
      className='w-[18em]'
      direction="column"
      gap="1"
    >
      <div className='py-1'>
        <Header />
        <Main />
      </div>
    </Flex>
  )
}
