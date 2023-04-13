import { Text } from 'native-base'

type Props = {
  focused: boolean;
  color: string;
  children: string;
}

export function ChatListTabBarLabel({ children, color, focused }: Props) {
  return (
    <Text
      fontSize={15} fontWeight={'medium'}
      mb={2} color={focused ? 'primary.500' : 'primary.100'}
    >{children}</Text>
  )
}
