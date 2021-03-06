/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';

AppRegistry.registerComponent(appName, () =>
        App

);
