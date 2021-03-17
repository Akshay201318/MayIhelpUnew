import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, Dimensions } from 'react-native';



const List = ({ data }) => {
    let shops = [];
    for (let i = 0; i < 6; i++) {
        shops.push(
            <View key={i}>
                <TouchableOpacity>
                    <TouchableOpacity style={styles.itemsIconStyle}>
                        <Image
                            source={require('../public/Newfolder/juice.jpg')}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </TouchableOpacity>
                    <View style={{ height: 50, paddingLeft: 5 }}>
                        <View>
                            <Text style={{ fontSize: 16 }}>Natural Juice</Text>
                        </View>
                        <View>
                            <Text>$ 105</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, height: "100%" }}>
            <View style={{ padding: 20, flex: 1 }}>
                <Text style={styles.headerTextStyle}>
                    {data.listHeader}</Text>
            </View>
            <View style={styles.itemsListStyle}>
                {shops}
            </View>
            <TouchableOpacity style={{ alignItems: "center", paddingBottom: 30 }}>
                <Text style={{ color: "blue" }}>See more</Text>
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
    itemsListStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        flex: 1
    },
    itemsIconStyle: {
        backgroundColor: "purple",
        height: 150,
        width: 160
    }
});