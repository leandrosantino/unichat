import { HStack, Text, Icon } from 'native-base'
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { AppIconButton } from '../../../components/AppIconButton';

export function ChatListHeader({ navigation }: BottomTabHeaderProps) {
  const { navigate } = navigation

  return (
    <HStack
      bg={'primary.800'} alignItems={'center'}
      justifyContent={'space-between'}
      pt={'7'} px={'4'} w={'full'} h={'24'}
    >
      <Text
        color={'primary.50'}
        fontSize={'2xl'}
        fontWeight={'bold'}
      >UniChat</Text>
      <HStack
        space={3}
      >
        <AppIconButton
          icon={<Icon as={Feather} name="camera" />}
          onPress={() => {
            navigate('camera')
          }}
        />
        <AppIconButton
          icon={<Icon as={Feather} name="search" />}
        />
        <AppIconButton
          icon={<Icon as={SimpleLineIcons} name="options-vertical" />}
        />
      </HStack>
    </HStack >
  )
}
