import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView, Switch, Dimensions, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch} from 'react-redux'; 


import { validateUserDetailsInSignIn } from './ValidateUserDetals';
import { getToken, getUserData, signIn } from './userMethods';
import {IsLoading, AddUser} from '../../redux/action/userActions';

  const signInForm = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    let UserData = useSelector(store => store.UserData);

    const submit =  () => {
        if (validateUserDetailsInSignIn(username, password, setEmailErr, setPasswordErr)){
            let formData ={
                email: username,
                password: password,
                rememberMe: rememberMe
            }
            dispatch(IsLoading());
            console.log("isLoadin>>>>", UserData.isLoading);
            signIn({formData, setPassword, setUsername,getUserData, dispatch });
            dispatch(AddUser(user));
            UserData.user ? navigation.navigate('Home') : null
            console.log("userData>>>>>>>>>>>>", UserData);
            setEmailErr('');
            setPasswordErr('');
        }
    }

    useEffect(() => {
       
     }, [UserData.isLoading])

    return (
        UserData.isLoading ? <ActivityIndicator size="large" color="#00ff00"/> :
        <LinearGradient colors={['#17ffc6', '#03448c',]} style= {styles.container}>
        <ScrollView>
        <View style={{flex: 1}}>
        
                <View style={styles.iconContainer}>
                    <Image
                        style={styles.stretch}
                        source={require('../../public/images/launch_screen.png')}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={{ textAlign: "left", color: "white", fontSize: 30, paddingTop: 5 }}> Sign In </Text>
                    <TextInput
                        style={styles.inputBoxStyle}
                        placeholder="Username"
                        onChangeText={text => setUsername(text)}
                        value = {username}
                    />
                    {emailErr ? <Text style={{ color: "red", fontSize: 15, paddingTop: 5}}>{emailErr}</Text> : null}
                    <TextInput
                        style={styles.inputBoxStyle}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={text => setPassword(text)}
                        value = {password}
                    />
                    {passwordErr ? <Text style={{ color: "red", fontSize: 15, marginTop: 5 }}>{passwordErr}</Text> : null}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%", paddingTop: 20 }}>
                        <View style={{ flexDirection: "row" }} >
                            <Switch
                                trackColor={{ false: "#767577", true: "#03448c" }}
                                thumbColor={rememberMe ? "#17ffc6" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setRememberMe(!rememberMe)}
                                value={rememberMe}
                            />
                            <Text style={{ color: '#ffffff', fontSize: 15 }}>Remember Me</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} >
                            <Text style={{ color: '#ffffff', fontSize: 15 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress = { ()=> submit() }
                    >
                        <Text style={{ color: '#ffffff', fontSize: 20, paddingTop: 5,}}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 20, paddingTop: 30 }}> Or Sign In With</Text>
                    <View style={{ width: "70%", flexDirection: "row", justifyContent: "space-around", padding: 30 }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.socialAuthLogo}
                                source={require('../../public/images/GOOGLE.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.socialAuthLogo}
                                source={require('../../public/images/fb.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around"}}>
                        <Text style={{ color: "white", fontSize: 20 }}>
                            Don't have an account?
                     </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ color: "white", fontSize: 20 }}>
                                Sign Up
                      </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </View>
        </ScrollView>
        </LinearGradient>

    );
}

export default signInForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stretch: {
        width: '30%',
        height: 120,
        borderRadius: 30
    },
    iconContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 50
    },
    formContainer: {
        paddingTop: "5.6%",
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        width: '100%'
    },
    inputBoxStyle: {
        width: "80%",
        minHeight: 45,
        backgroundColor: "white",
        color: "black",
        padding: 10,
        fontSize: 14,
        borderRadius: 50,
        marginTop: 20,
        zIndex: 2,
        paddingLeft: 20,
    },
    signUpButton: {
        width: "80%",
        marginTop: 20,
        minHeight: 45,
        padding: 10,
        borderRadius: 50,
        backgroundColor: "#17ffc6",
        alignItems: "center",
        justifyContent: "center"
    },
    socialAuthLogo: {
        height: 50,
        width: 50,
        borderRadius: 100,
    }
});

