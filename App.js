/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { Provider} from 'react-redux';
import { store } from './redux/store';

import MainApp from "./components/index";


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainApp/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
