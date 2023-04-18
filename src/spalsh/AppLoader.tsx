import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

SplashScreen.preventAutoHideAsync();


const AppLoader: React.FC<Props> = ({ children }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {

      } catch (e) {
        //handle errors
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log("performed layout");
    if (appIsReady) {
      console.log("app is ready");
      await SplashScreen.hideAsync(); // Workaround that MapView onDidFinishLoadingStyle is not working.
    }

  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};

export default AppLoader;
