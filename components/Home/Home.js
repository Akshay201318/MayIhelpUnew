import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';


import SwiperFlatListComponent from "../../customComponents/swiper-flatlist";
import FlatListHorizontal from "../../customComponents/flatListHorizontal";
import DrawerWindow from "../../customComponents/HomeOptionsDrawerWindow";
import AllCategoriesDrawerWindow from "../../customComponents/AllCategoriseDrawerWindow";
import List from "../../customComponents/List";
import List2 from "../../customComponents/List2";
import { loadLocation } from "../user/userMethods";
import { ScrollView } from 'react-native-gesture-handler';


const Home = ({ user, navigation }) => {

    const [animatedHomeOptionsValue, setAnimatedValue] = useState(new Animated.Value(-Dimensions.get('window').width/2));
    const [HomeOptionsDrawerWidth, setHomeOptionsDrawerWidth] = useState(0);
    const [animatedAllCategoriesValue, setAnimatedAllCategoriesValue] = useState(new Animated.Value(-Dimensions.get('window').width/2))
    const [AllCategoriesDrawerWidth, setAllCategoriesDrawerWidth] = useState(0)
    const userData = useSelector(store => store.UserData);
    const [ location , setLocation ] = useState({});
    const [locattionErr, setErrorMsg] = useState('');

    const toggleHomeOptionsDrawer = () => {
        slideHomeOptionsAnimation()
    }

    const toggleAllCategoriesDrawer = () => {
        slideAllCategoriesAnimation()
    }

    const slideHomeOptionsAnimation = () => {
        Animated.timing(animatedHomeOptionsValue, {
            toValue: HomeOptionsDrawerWidth,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            setHomeOptionsDrawerWidth(HomeOptionsDrawerWidth===1?0:1)
        })
    }

    const slideAllCategoriesAnimation = () => {
        Animated.timing(animatedAllCategoriesValue, {
            toValue: AllCategoriesDrawerWidth,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            setAllCategoriesDrawerWidth(AllCategoriesDrawerWidth===1?0:1)
        })
    }

    useEffect(()=>{
        loadLocation(setLocation, setErrorMsg);
    },[userData.user])

    return (
        <View style={{ flex: 1, position: "absolute", height: "100%" }}>
                <View style={{ flex: 1, position: "absolute", width: "100%", height: "100%" }}>
                    <DrawerWindow  onPress={toggleHomeOptionsDrawer} animatedValue={animatedHomeOptionsValue} navigation={navigation} />
                </View> 
            <View style={{
                backgroundColor: "#0CCDA3",
                display: "flex",
                flexDirection: "row", justifyContent: "space-between",
                padding: 10, alignItems: "center"
            }}>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", paddingLeft: 5 }}>
                    <View>
                        <TouchableOpacity onPress={toggleHomeOptionsDrawer}>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../public/images/usericon1.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Image
                            style={{ height: 50, width: 150 }}
                            source={require('../../public/images/nameLogo3.png')}
                        />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "20%", alignItems: "center" }}>
                    <View>
                        <Image
                            style={{ height: 25, width: 25 }}
                            source={require('../../public/images/icon-action-search24px1.png')}
                        />
                    </View>
                    <View>
                        <Image
                            style={{ height: 30, width: 20 }}
                            source={require('../../public/images/ic_keyboard_voice_24px.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#0CCDA3", borderTopWidth: 1, borderTopColor: "grey", paddingVertical: 10, paddingHorizontal: 20 }}>
                <View style={{ display: "flex", flexDirection: "row", paddingLeft: 5 }}>
                    <Image
                        source={require('../../public/images/location.png')}
                    />
                    <Text style={{ fontSize: 15, color: "white", paddingLeft: 5 }}>Update Location</Text>
                </View>
                <View style={{width: 200}}>
                    <Text style={{ fontSize: 15, color: "white", fontWeight: "800" }}>{location && location.length && location[0].formatted_address}</Text>
                </View>
            </View>
            <View>
            <View style={{ flex: 1, position: "absolute", width: "100%", height: "100%" }}>
                    <AllCategoriesDrawerWindow  onPress={toggleAllCategoriesDrawer} animatedValue={animatedAllCategoriesValue} navigation={navigation} />
            </View> 
                <FlatListHorizontal onPress ={toggleAllCategoriesDrawer} navigation={navigation}/>
            </View>
            <ScrollView style={{flex:1, height:"100%"}}>
            <View style={{flex: 1}}>
            <View style={{ height: "15%", width: "100%" }}>
                <SwiperFlatListComponent />
            </View>
            <View>
                <List data={{ 
                    listHeader: "Recommendations for you",
                    nevigation: navigation,
                    uri:"getRecommendedItems"
                    }}/>
            </View>
            <View>
                <List2 data={{ 
                    listHeader: "Shops near you",
                    nevigation: navigation,
                    uri:"getRecommendedItems"
                    }}/>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({

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
});