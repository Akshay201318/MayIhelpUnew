import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    iconUrl: require("../public/images/All.png"),
    title: "All"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    iconUrl: require("../public/images/Untitled-1.png"),
    title: "Food"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    iconUrl: require("../public/images/Fashion.png"),
    title: "Fashion"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    iconUrl: require("../public/images/Mobile.png"),
    title: "Mobiles"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    iconUrl: require("../public/images/Appliances.png"),
    title: "Appliences"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    iconUrl: require("../public/images/Electronic.png"),
    title: "Electronics"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    iconUrl: require("../public/images/Kitchen.png"),
    title: "Kitchen"
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Image style={{height: 50, width: 50, borderRadius: 100}} resizeMode="cover" source ={item.iconUrl}/>
  </TouchableOpacity>
);

const FlatListHorizontal = ({ onPress } ) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {

    return (
        <View>
      <Item
        item={item}
        onPress={() => item.title == "All" ? onPress : null }
        style={{ backgroundColor }}
      />
      <Text style ={{textAlign: "center", fontSize: 10,}}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
       horizontal
       showsHorizontalScrollIndicator = {false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
  },
  item: {
    marginTop: 5,
    marginHorizontal: 8,
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems:"center",
    justifyContent: "center"
  },
  title: {
    fontSize: 15,
  },
});

export default FlatListHorizontal;