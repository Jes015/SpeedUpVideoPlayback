import { AppLogo } from '@/components'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Link } from '@radix-ui/themes'

export const Header = () => {
  return (
        <header className="px-2 py-1 flex justify-between w-full items-center">
            <AppLogo />
            <Link href='https://github.com/Jes015/SpeedUpVideoPlayback' target='_blank'>
                <GitHubLogoIcon className='w-6 h-6 text-white' />
            </Link>
        </header>
  )
}
