import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from "react-native-flash-message";
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import SignUp from "./user/signUpForm";
import SignIn from "./user/signInForm";
import ResetPassword from "./user/resetPassword";
import webView from './user/mywebView';
import Home from './Home/Home';
import { getToken, getUserData } from './user/userMethods';

const Stack = createStackNavigator();


const MainApp = () => {

  const dispatch = useDispatch();
  const userData = useSelector(store => store.UserData);
  const [user, setUser] = useState({});
  
  const [token, setToken] = useState('');

  useEffect(() => {
    getToken(setToken);
    if (token) {
      getUserData(token, dispatch);
    }
  }, [token])
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle="#17ffc6" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SignIn"
          component={userData && userData.user.name ? Home : SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="Home"
          component={ userData && userData.name ? Home: SignIn }
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ResetPassword}
        />
        <Stack.Screen
          name="myWebView"
          component={webView}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
});

export default MainApp;
