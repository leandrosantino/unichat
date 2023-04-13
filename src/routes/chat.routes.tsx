import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Calls from '../screens/chat/Calls';
import { ChatList } from '../screens/chat/ChatList';

export function ChatRoutes() {
  const { Screen, Navigator } = createMaterialTopTabNavigator();

  return (
    <Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: "#fff" },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: '#0d2636', },

      }}
    >
      <Screen
        name='chatList'
        component={ChatList}
      />
      <Screen
        name='calls'
        component={Calls}
      />
    </Navigator>
  )
}