import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base'
import { theme } from './theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="light" />
      <Routes />
    </NativeBaseProvider >
  );
}

