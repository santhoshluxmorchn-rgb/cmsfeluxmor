import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from './src/db';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <AppNavigator />
      </UserProvider>
    </SafeAreaProvider>
  );
}

