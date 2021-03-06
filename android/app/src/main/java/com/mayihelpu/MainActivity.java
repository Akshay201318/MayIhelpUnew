package com.mayihelpu;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; 
// react-native-splash-screen < 0.3.1 
// import com.cboy.rn.splashscreen.SplashScreen; 

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    SplashScreen.show(this); 
    return "MayIHelpU";
  }
}
