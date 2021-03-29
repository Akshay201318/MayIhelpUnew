import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { 
  MobilesImg,
  AppliencesImg,
  KitchenImg,
  ElectronicsImg
 } from "../Images";

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
    iconUrl: require("../public/images/Artboard.png"),
    title: "Fashion"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    iconUrl: MobilesImg,
    title: "Mobiles"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    iconUrl: AppliencesImg,
    title: "Appliences"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    iconUrl: ElectronicsImg,
    title: "Electronics"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    iconUrl: KitchenImg,
    title: "Kitchen"
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image style={{width:50, height:50, borderRadius: 100}}  source ={item.iconUrl}/>
  </TouchableOpacity>
);

const FlatListHorizontal = ({ onPress } ) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {

    return (
        <View>
      <Item
        item={item}
        onPress={() => item.id == "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba" ? onPress() : null }
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
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
  },
});

export default FlatListHorizontal;