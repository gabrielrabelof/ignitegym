import { Center, Spinner } from "@gluestack-ui/themed"

export type Props = {
    color?: string
}

export function Loading({ color="green" }: Props) {
    return (
        <Center flex={1} bg="$gray700">
            <Spinner color={color} />
        </Center>
    )
}