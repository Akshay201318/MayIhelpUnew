import React from 'react';
import UserProfile from './userProfile';


export const userProfileScreen = ({navigation}) => <UserProfile navigation = {navigation} name ={"User"} />
export const SignInScreen = ({navigation}) => <UserProfile navigation = {navigation} name ={"SignIn"} />
export const SignUpScreen = ({navigation}) => <UserProfile navigation = {navigation} name ={"SignUp"} />
export const CatetoriesScreen = ({navigation}) => <UserProfile navigation = {navigation} name ={"Categories"} />