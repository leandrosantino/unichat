import { CodeEditor } from "../screens/codeEditor/CodeEditor";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed } from "../screens/feed/Feed";
import { ChatRoutes } from "./chat.routes";
import { Chat } from "../screens/chat/Chat";
import { theme } from '../../theme'
import { background } from "native-base/lib/typescript/theme/styled-system";

function TabRoutes() {

  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator
      initialRouteName="chat"
    >
      <Screen
        name='feed'
        component={Feed}
      />
      <Screen
        name='chat'
        component={ChatRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='codeEditor'
        component={CodeEditor}
      />
    </Navigator>
  )
}



export function AppRoutes() {
  const { Screen, Navigator, Group } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
      }}
    >
      <Screen
        options={{
          headerShown: false
        }}
        name='app'
        component={TabRoutes}
      />

      <Group >
        <Screen
          name="contact"
          component={Chat}
        />
      </Group>

    </Navigator>
  )
}