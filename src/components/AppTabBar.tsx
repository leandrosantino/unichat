import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Button,
  HStack,
} from 'native-base';
import { theme } from "../../theme";

export function MyTabBar({ state, navigation }: BottomTabBarProps) {

  return (
    <HStack
      justifyContent={'center'}
      space={15}
      bg={'primary.800'}
      h={14}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const color = isFocused ?
          theme.colors.primary[500] :
          theme.colors.primary[100]

        const size = isFocused ?
          theme.sizes[8] :
          theme.sizes[7]

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
          <Button
            variant={'link'}
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            p={2}
          >
            {route.name === 'feed' ?
              <Ionicons
                name="newspaper"
                size={size} color={color}
              /> : route.name === 'chat' ?
                <FontAwesome5
                  name="telegram-plane"
                  size={size} color={color}
                /> : route.name === 'codeEditor' ?
                  <MaterialCommunityIcons
                    name="file-code-outline"
                    size={size} color={color}
                  /> : <></>}
          </Button>
        );
      })}
    </HStack>
  );
}