import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { removeToken } from '../components/user/userMethods';

const DrawerWindow = ({ style, animatedValue, navigation, onPress }) => {
    const userData = useSelector(store => store.UserData.user);
    const dispatch = useDispatch();
    const tranlateValue = {
        translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-Dimensions.get('window').width / 1.4, 0]
        })
    }
    return (
        <Animated.View style={{ ...styles.container, transform: [tranlateValue] }}>
            <View style={styles.headerContainer}>
                <View style={{ padding: 20, flexDirection: "row", alignItems: "center", }}>
                    <Image
                        style={{ height: 40, width: 40 }}
                        source={require('../public/images/userPic.png')}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{userData.name}</Text>
                        <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>{userData.email}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ alignItems: "flex-start", paddingTop: 10 }} onPress={onPress}>
                    <Image
                        style={{ height: 25, width: 25 }}
                        source={require('../public/images/cross_white_icon.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <View style={{borderBottomWidth: 2, borderBottomColor: "#E5E5E5", paddingBottom:20}}>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/user.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Your Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                <View style={{backgroundColor: "#0CCDA3", borderRadius: 50}}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require('../public/images/All.png')}
                    />
                    </View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>All Categories</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{borderBottomWidth: 2, borderBottomColor: "#E5E5E5", paddingBottom:20}}>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require('../public/images/shop.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Shop Near You</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/home.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/home.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Your Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/home.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Your Wishlist</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/home.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Sale On Shop</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/cart.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>My Cart</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require('../public/images/shop.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Language</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/home.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15, paddingTop:10 }}>
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../public/images/home.png')}
                    />
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Help & Feedback</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => removeToken(navigation, dispatch)}
                    >
                        <Text style={{ color: '#ffffff', fontSize: 20 }}>
                            Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "70%",
        zIndex: 5,
        borderStyle: "solid",
        borderRightWidth: 1,
        borderRightColor: "#17ffc6"
    },
    headerContainer: {
        backgroundColor: "#0CCDA3",
        height: 100,
        flexDirection: "row"
    },
    header: {

    },
    logoutButton: {
        width: "40%",
        marginTop: "10%",
        minHeight: 40,
        borderRadius: 50,
        backgroundColor: "#0CCDA3",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center"
    },
});

export default DrawerWindow;