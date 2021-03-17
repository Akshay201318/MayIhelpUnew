import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, Dimensions } from 'react-native';



const List = ({ data }) => {
    let shops = [];
    for (let i = 0; i < 6; i++) {
        shops.push(
            <View key ={i} style={{width:"100%"}}>
            <TouchableOpacity style={{flex: 1, flexDirection:"row", paddingTop: 3, backgroundColor: "#D3D3D3", width:"100%"}}>
                <TouchableOpacity style={ styles.itemsIconStyle }>
                    <Image
                        source={require('../public/Newfolder/juice.jpg')}
                        style={{ width: "100%", height: "100%" }}
                    />
                </TouchableOpacity>
                <View style={{ height: 80 , paddingLeft: 20, backgroundColor:"#f0f0f0", width:"100%", paddingVertical: 10}}>
                    <View>
                        <Text style={{ fontSize: 16 }}>Shop name</Text>
                    </View>
                    <View>
                        <Text>Rating</Text>
                    </View>
                    <View>
                        <Text>Type</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View  style={{flex:1, height:"100%", paddingBottom: 200}}>
            <View style={{ padding: 20 , flex:1 }}>
                <Text style={styles.headerTextStyle}>
                    {data.listHeader}</Text>
            </View>
            <View style={ styles.itemsListStyle }>
            { shops }
            </View>
            <TouchableOpacity style={{alignItems:"center", paddingVertical: 20}}>
                <Text style={{color:"blue"}}>See more</Text>
            </TouchableOpacity>
        </View>
    )
}

export default List;
const styles = StyleSheet.create({
    headerTextStyle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    itemsListStyle:{
        justifyContent: "space-around" , 
        flexWrap:"wrap",
        flex: 1
    },
    itemsIconStyle:{
        backgroundColor: "#f0f0f0", 
        height: 80, 
        width: 100,
        paddingLeft: 20,
        paddingVertical: 10
    }
});