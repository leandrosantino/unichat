import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { MaterialIcons, Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons'
import {
  HStack,
  Text,
  VStack,
  Icon,
  IconButton,
  Avatar,
  theme,
} from 'native-base'
import { AppIconButton } from '../../../components/AppIconButton'

export function ChatPageHeader({ navigation }: NativeStackHeaderProps) {

  const { goBack } = navigation

  return (
    <HStack
      pt={9} pb={3} h={24}
      alignItems={'center'}
      bg={'primary.800'}
      space={2} pl={4} pr={2}
    >
      <IconButton
        rounded={'full'}
        alignItems={'center'}
        p={0}
        icon={<Icon as={MaterialIcons} name='arrow-back-ios' />}
        _icon={{
          color: 'primary.100',
          ml: '1',
          size: theme.sizes[1.5]
        }}
        _pressed={{ _icon: { color: 'primary.600' }, }}
        onPress={() => { goBack() }}
      />
      <Avatar
        size={'sm'}
        source={{
          uri: 'https://github.com/leandrosantino.png'
        }}
      />
      <VStack
        h={'full'}
        flex={1}
      >
        <Text
          color={'primary.100'}
          fontSize={'lg'}
        >
          Leandro
        </Text>
        <Text
          color={'primary.100'}
          fontSize={'xs'}
        >
          online
        </Text>
      </VStack>
      <HStack>
        <AppIconButton
          icon={<Icon as={Ionicons} name="ios-videocam-outline" />}
        />
        <AppIconButton
          icon={<Icon as={Ionicons} name="ios-call" />}
        />
        <AppIconButton
          icon={<Icon as={SimpleLineIcons} name="options-vertical" />}
        />
      </HStack>
    </HStack>
  )
}
