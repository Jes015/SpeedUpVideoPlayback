import { Heading } from '@radix-ui/themes'

export const AppLogo = () => {
  return (
        <Heading className="flex flex-col items-center drop-shadow-text text-[1.3em]">
            <span className="leading-[1em]">PlayBack</span>
            <span className="leading-[0.8em]">Modifier</span>
        </Heading>
  )
}
