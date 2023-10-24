import { Footer, Header, Main } from '@/components'
import { Flex } from '@radix-ui/themes'

export default function MyApp() {
  return (
    <Flex
      className='w-[18em] border rounded-sm'
      direction="column"
      gap="2"
    >
      <Header />
      <Main />
      <Footer />
    </Flex>
  )
}