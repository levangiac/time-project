import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import RootStack from '~navigators/RootStack';
// import { EVENT_ROUTE_KEY, ROOT_ROUTE_KEY } from '@navigators/router-key';
import { NavigationContainer, NavigationState } from '@react-navigation/native';

import React, { useCallback, useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider, useDispatch } from 'react-redux';

import store, { persistor } from '~store/index';
// import { LocalizationProvider } from '~theme/localization';

const Main = () => {
  function screenTracking(state: NavigationState | undefined): void {
    if (state) {
      const route = state?.routes[state.index];
      if (route.state) {
        return screenTracking(route?.state as any);
      }
      return console.log(`====== NAVIGATING to > ${route?.name}`);
    }
  }

  const insets = useSafeAreaInsets();
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const dispatch = useDispatch();

  return (
    <NavigationContainer onStateChange={screenTracking}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <RootStack />
          {/* <ModalAlert /> */}
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      {/* <PSpinner /> */}
    </NavigationContainer>
  );
};
const ReduxStoreWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};
const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <ReduxStoreWrapper />
  </SafeAreaProvider>
);
export default App;
