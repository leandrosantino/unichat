import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { ChatRoutes } from './chat.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}