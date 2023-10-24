import { Heading } from "@radix-ui/themes"

export const AppLogo = () => {
    return (
        <Heading className="flex flex-col items-center drop-shadow-text text-[1.3em]">
            <span>PlayBack</span>
            <span>Modifier</span>
        </Heading>
    )
}