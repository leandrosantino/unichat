import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Calls from '../screens/chat/Calls';
import { ChatList } from '../screens/chat/ChatList';
import { theme } from '../../theme';
import { ChatListHeader } from '../screens/chat/components/ChatListHeader';
import { ChatListTabBarLabel } from '../screens/chat/components/ChatListTabBarLabel'


export function ChatRoutes() {
  const { Screen, Navigator } = createMaterialTopTabNavigator();

  return (
    <>
      <ChatListHeader />
      <Navigator
        screenOptions={{
          tabBarLabel: (props) => <ChatListTabBarLabel {...props} />,
          tabBarPressColor: theme.colors.primary[700],
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary[500],
            height: theme.sizes[1],
          },
          tabBarItemStyle: {
            paddingTop: 0,
            height: theme.sizes.full,
          },
          tabBarContentContainerStyle: {
            height: theme.sizes.full,
          },
          tabBarStyle: {
            height: theme.sizes[9],
            backgroundColor: theme.colors.primary[800],
          },
        }}
      >
        <Screen
          name='chatList'
          component={ChatList}
          options={{
            title: 'Conversas'
          }}
        />
        <Screen
          name='calls'
          component={Calls}
          options={{
            title: 'Chamadas'
          }}
        />
      </Navigator >
    </>
  )
}