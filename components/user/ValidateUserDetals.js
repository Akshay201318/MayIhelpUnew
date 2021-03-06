import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
// import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";

let baseUrl = 'https://mayihelpu.herokuapp.com/api';
baseUrl = 'http://192.168.43.207:8000/api';

const validateUserDetailsInSignUp = (username, email, password, setUsernameErr, setEmailErr, setPasswordErr) => {
    let flag = true;
    // Validating the user name
    if (username === "") {
        setUsernameErr("This field should not be empty!");
        flag = false;
    } else if (username.length < 6) {
        setUsernameErr(
            "Username atleast 6 characters long!"
        );
        flag = false;
    } else {
        setUsernameErr("");
    }

    // Validating email address
    if (email === "") {
        setEmailErr("Email should not be empty!");
        flag = false;
    } else if (email.length < 8) {
        setEmailErr("Please enter a valid email!");
        flag = false;
    } else if (!(email.includes("@") && email.includes(".com"))) {
        setEmailErr("Please include an @ or .com in the email!");
        flag = false;
    } else {
        setEmailErr("");
    }

    // Validating password
    if (password === "") {
        setPasswordErr("Password must not be empty!");
        flag = false;
    } else {
        setPasswordErr("");
    }

    return flag;

}

const validateUserDetailsInSignIn = (email, password, setEmailErr, setPasswordErr) => {
    let flag = true;
    // Validating email address
    if (email === "") {
        setEmailErr("Email should not be empty!");
        flag = false;
    } else {
        setEmailErr("");
    }

    // Validating password
    if (password === "") {
        setPasswordErr("Password must not be empty!");
        flag = false;
    } else {
        setPasswordErr("");
    }
    return flag;

}


const signUp = (formData, navigation, setUsername, setEmail, setPassword) => {
    axios.post(`${baseUrl}/users/signup`, { data: formData })
        .then(function (response) {
            console.log(response);
            showMessage({
                message: "Signed up successfully!",
                type: "success",
            });
            navigation.navigate('SignIn');
            setUsername('');
            setEmail('');
            setPassword('');
        })
        .catch(function (error) {
            showMessage({
                message: "Something went wrong!",
                type: "danger",
            });
            console.log(error);
        });
}

const storeToken = async (token) =>{
    try {
        console.log("setTokenisCalled",token)
        if (token) {
            const jsonValue = JSON.stringify(token)
        console.log("setTokenisCalled------------",jsonValue)
       AsyncStorage.setItem("MayIHelpU", jsonValue);
        // await useAsyncStorage
        }
    } catch (error) {
        console.log("error in storing the token", error);
    }
}

const getToken = async (setToken) =>{
    try {
           let token = await AsyncStorage.getItem('MayIHelpU');
           console.log("get token is called---------", token,JSON.parse(token));
           setToken(JSON.parse(token));
    } catch (error) {
        console.log("error in storing the token", error);
    }
}

const signIn = async (formData, navigation, setUsername, setPassword) => {
    axios.post(`${baseUrl}/users/login`, { data: formData })
        .then(function (response) {
            console.log(response);
            let token = response.data.token;
                if (token) {
                    storeToken(token);
                }
            showMessage({
                message: "Logged in successfully!",
                type: "success",
            });
            navigation.navigate('Home');
            setUsername('');
            setPassword('');
        })
        .catch(function (error) {
            showMessage({
                message: "Email or password is incorrect!",
                type: "danger",
            });
            console.log(error);
        });
}

const googleAuth = ({ setShowWebView }) => {
    return axios.get(`${baseUrl}/users/google`)
        .then(function (response) {
            setShowWebView(response.data);
            navigation.navigate('Home');
            showMessage({
                message: "Logged in successfully!",
                type: "success",
            });
        })
        .catch(function (error) {
            showMessage({
                message: "Something went wrong!",
                type: "danger",
            });
            console.log(error);
        });
};

const logOut = async ()=>{
    try {
            await AsyncStorage.removeItem(
                'MayIHelpU',
            )
    } catch (error) {
        console.log("error in deleting the token");
    }
}


export {
    validateUserDetailsInSignUp,
    validateUserDetailsInSignIn,
    signUp,
    signIn,
    googleAuth,
    logOut,
    getToken
};