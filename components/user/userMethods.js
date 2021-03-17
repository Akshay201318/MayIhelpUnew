import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";
import { AddUser } from '../../redux/action/userActions/index';
import GetLocation from 'react-native-get-location'

let baseUrl = 'https://mayihelpu.herokuapp.com/api';
baseUrl = 'http://192.168.43.207:8000/api';


const storeToken = async (token) => {
    try {
        if (token) {
            const jsonValue = JSON.stringify(token)
            AsyncStorage.setItem("MayIHelpU", jsonValue);
        }
    } catch (error) {
        console.log("error in storing the token", error);
    }
}


const getToken = async (setToken) => {
    try {
        let token = await AsyncStorage.getItem('MayIHelpU');
        setToken(JSON.parse(token));
    } catch (error) {
        console.log("error in storing the token", error);
    }
}

const removeToken = async (navigation) => {
    try {
        await AsyncStorage.removeItem(
            'MayIHelpU',
        )
        navigation.navigate('SignIn')
    } catch (error) {
        console.log("error in deleting the token");
    }
}


const signIn = async ({ formData, setUsername, setPassword, getUserData, dispatch }) => {
    axios.post(`${baseUrl}/users/login`, { data: formData })
        .then(function (response) {
            let token = response.data.token;
            if (token) {
                storeToken(token);
                getUserData && getUserData(token, dispatch)
            }
            showMessage({
                message: "Logged in successfully!",
                type: "success",
            });
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


const getUserData = (token, dispatch) => {
    const authAxios = axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    authAxios.post(`/users/getUserData`)
        .then(function (response) {
            dispatch(AddUser(response.data));
        })
        .catch(function (error) {
            showMessage({
                message: "Invalid Token Please Login Again!",
                type: "danger",
            });
        });
}

const loadLocation = async (setLocation, setErrorMsg) => {

    setLocation(null);
    setErrorMsg(null);

    try {

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(location);
                const { latitude, longitude } = location;
                let percentSign = '%';
                const ApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBFmg_pT9dAW5bwMGch5bLmSA0S2KJFnDE`;

                fetch(ApiUrl).then(response => {
                    const result = response.json();
                    if (response.ok) {
                        result.then(location =>{
                            setLocation(location.results);
                        })
                    } else {
                        setErrorMsg(result.message);
                    }
                }).catch(err => {
                    setErrorMsg(err);
                });
            })
            .catch(error => {
                const { code, message } = error;
                setErrorMsg(message);
                console.warn(code, message);
            })

    } catch (err) {
        setErrorMsg(err.message);
    }

}


export {
    signUp,
    signIn,
    googleAuth,
    removeToken,
    getToken,
    storeToken,
    getUserData,
    loadLocation
};