import { HStack, Text } from 'native-base'

export function ChatListHeader() {
  return (
    <HStack
      bg={'primary.800'} alignItems={'center'}
      justifyContent={'space-between'}
      pt={'7'} px={'4'} w={'full'} h={'22'}
    >
      <Text
        color={'primary.50'}
        fontSize={'xl'}
        fontWeight={'medium'}
      >UniChat</Text>
      <HStack>
        <Text>teste</Text>
      </HStack>
    </HStack >
  )
}
