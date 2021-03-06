import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';



const UserProfile = ({navigation, name}) => {

    
    return (
      <View style ={{flex: 1}}>
          <SafeAreaView style={{flex:1}}>
            <TouchableOpacity style ={{ alignItems:"flex-end", margin: 16, backgroundColor: "yellow"}} onPress = {navigation.openDrawer}>
              {/* <FontAwesome5 name ="bars" size = {24} color ="161924" /> */}
              <View>
                  <Text>
                      {name}
                  </Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    body: {
      flex: 1,
    }
  });
  
  export default UserProfile;