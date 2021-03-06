import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';

const Header = ({ navigation }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    style={styles.backButton}
                    source={require('../../public/images/ic_back.png')}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>Change Password</Text>
        </View>
    )
}

const FindYourAccount = ({ input, setInput }) => {

    return (
        <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Find your account!</Text>
            <View>
                <Text style={{ color: "grey", marginTop: 20 }}>Enter your email, phone number or username</Text>
                <TextInput
                    style={styles.inputBoxStyle}
                    placeholder="Type..."
                    onChangeText={text => setUsername(text)}
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ResetOptions = () => {

    return (
        <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>How do you want to reset your password?</Text>
            <View>
                <Text style={{ color: "grey", marginTop: 20 }}>You can use the information associated with your account.</Text>
                <Text style={{ color: "black", marginTop: 20, fontSize: 15 }}>Send an email to aks*********@****.com</Text>
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Next</Text>
                </TouchableOpacity>
                <Text style={{ color: "blue", marginTop: 20, fontWeight: "bold" }}>Don't have access to these?</Text>
            </View>
        </View>
    )
}

const EnterOtp = ({ input, setInput }) => {

    return (
        <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Check your email!</Text>
            <View>
                <Text style={{ color: "grey", marginTop: 20 }}>You'll recieve an OTP to
                verify here so you can reset your account password
                 </Text>
                <TextInput
                    style={styles.inputBoxStyle}
                    placeholder="Enter OTP....."
                    onChangeText={text => setUsername(text)}
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Verify</Text>
                </TouchableOpacity>
                <Text style={{ color: "grey", marginTop: 20 }}>If you don't see the email in your inbox
                check other places.It might be in junk, spam, social or other folders.
                </Text>
                <Text style={{ color: "blue", marginTop: 20, fontWeight: "bold" }}>Don't recieved an OTP? Resend OTP</Text>
            </View>
        </View>
    )
}


const resetPassword = ({ navigation }) => {
    const [input, setInput] = useState('');
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ResetOptions input={input} setInput={setInput} />
        </View>
    )
}

export default resetPassword;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButtonContainer: {
        height: 10,
        width: 50
    },
    backButton: {
        width: 40,
        height: 40,
        flex: 0.8
    },
    header: {
        backgroundColor: "#17ffc6",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        paddingLeft: 5,
        justifyContent: "space-between"
    },
    headerText: {
        color: "white",
        fontSize: 25,
        flex: 3,
        paddingLeft: 50
    },
    inputBoxStyle: {
        width: "80%",
        minHeight: 45,
        backgroundColor: "white",
        borderColor: "#17ffc6",
        borderWidth: 1,
        color: "black",
        padding: 10,
        paddingLeft: 20,
        fontSize: 14,
        borderRadius: 50,
        marginTop: 20,
        zIndex: 2
    },
    searchButton: {
        backgroundColor: "#17ffc6",
        width: "40%",
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 20
    }
});