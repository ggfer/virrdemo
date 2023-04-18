import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppLoader from './src/spalsh/AppLoader';
import AppNavigator from './src/navigations/Appnavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppLoader>
        <AppNavigator />
      </AppLoader>
    </GestureHandlerRootView>
  );
}
