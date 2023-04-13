import { HStack, Text, Icon, IconButton } from 'native-base'
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export function ChatListHeader() {
  const { navigate } = useNavigation()

  return (
    <HStack
      bg={'primary.800'} alignItems={'center'}
      justifyContent={'space-between'}
      pt={'7'} px={'4'} w={'full'} h={'22'}
    >
      <Text
        color={'primary.50'}
        fontSize={'2xl'}
        fontWeight={'bold'}
      >UniChat</Text>
      <HStack
        space={3}
      >
        <IconButton
          icon={<Icon as={Feather} name="camera" />}
          color={'primary.100'}
          p={3}
          rounded={'full'}
          _icon={{ color: "primary.100", }}
          _pressed={{ _icon: { color: 'primary.600' }, }}
          onPress={() => {
            navigate('camera')
          }}
        />

        <IconButton
          color={'primary.100'}
          icon={<Icon as={Feather} name="search" />}
          p={3}
          rounded={'full'}
          _icon={{ color: "primary.100", }}
          _pressed={{ _icon: { color: 'primary.600' }, }}
        />

        <IconButton
          color={'primary.100'}
          icon={<Icon as={SimpleLineIcons} name="options-vertical" />}
          p={3}
          rounded={'full'}
          _icon={{ color: "primary.100", }}
          _pressed={{ _icon: { color: 'primary.600' }, }}
        />
      </HStack>
    </HStack >
  )
}
