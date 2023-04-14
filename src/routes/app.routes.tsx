import { CodeEditor } from "../screens/codeEditor/CodeEditor";
import { BottomTabBarProps, BottomTabHeaderProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed } from "../screens/feed/Feed";
import { ChatRoutes } from "./chat.routes";
import { ChatPage } from "../screens/chat/ChatPage";
import { theme } from '../../theme'
import { MyTabBar } from '../components/AppTabBar'
import { Camera } from "../screens/camera/Camera";
import { ChatListHeader } from "../screens/chat/components/ChatListHeader";
import { ChatPageHeader } from "../screens/chat/components/ChatPageHeader";

function TabRoutes() {

  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator
      tabBar={(props: BottomTabBarProps) => <MyTabBar {...props} />}
      initialRouteName="chat"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary[800],
        },
        headerTintColor: theme.colors.primary[100]
      }}
    >
      <Screen
        name='feed'
        component={Feed}
      />
      <Screen
        name='chat'
        component={ChatRoutes}
        options={{
          // headerShown: false,
          header: (props: BottomTabHeaderProps) => (<ChatListHeader {...props} />),
        }}
      />
      <Screen
        name='codeEditor'
        component={CodeEditor}
      />
    </Navigator >
  )
}

export function AppRoutes() {
  const { Screen, Navigator, Group } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        headerStyle: {
          backgroundColor: theme.colors.primary[800],
        },
        headerTintColor: theme.colors.primary[100]
      }}
    >
      <Screen
        options={{
          headerShown: false
        }}
        name='app'
        component={TabRoutes}
      />

      <Screen
        name="chatPage"
        component={ChatPage}
        options={{
          header: (props) => (<ChatPageHeader {...props} />)
        }}
      />

      <Screen
        name="camera"
        component={Camera}
      />

    </Navigator>
  )
}