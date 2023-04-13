import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Button,
  IconButton,
  Icon,
  HStack,
} from 'native-base';
import { theme } from "../../theme";

export function MyTabBar({ state, navigation }: BottomTabBarProps) {

  return (
    <HStack
      justifyContent={'center'}
      space={15}
      bg={'primary.800'}
      h={15}
      pb={2}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const color = isFocused ?
          theme.colors.primary[500] :
          theme.colors.primary[100]

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <IconButton
            icon={
              route.name === 'feed' ?
                <Icon as={Ionicons} name='newspaper' /> :
                route.name === 'chat' ?
                  <Icon as={FontAwesome5} name='telegram-plane' /> :
                  route.name === 'codeEditor' ?
                    <Icon as={MaterialCommunityIcons} name='file-code-outline' /> :
                    <></>
            }
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            _icon={{ color, size: theme.sizes[2] }}
            _pressed={{
              bg: '',
              _icon: {
                color: 'primary.700',
              }
            }}
          />
        );
      })}
    </HStack >
  );
}