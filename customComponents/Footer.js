import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'


const Footer = () =>  {
    return (
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
        <TouchableOpacity style={styles.bottomNavigationIconStyle}>
        <Image
               source={require('../public/images/drawable-xxxhdpi/ic_home_24px.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationIconStyle}>
        <Image
               source={require('../public/images/drawable-xxxhdpi/ic_store_24px.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationIconStyle}>
        <Image
               source={require('../public/images/drawable-xxxhdpi/ic_people_24px.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationIconStyle}>
        <Image
               source={require('../public/images/drawable-xxxhdpi/ic_shopping_cart_24px.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationIconStyle}>
        <Image
               source={require('../public/images/drawable-xxxhdpi/ic_notifications_24px.png')}
           />
        </TouchableOpacity>
   </View>
    )
}

const styles = StyleSheet.create({

    bottomNavigationIconStyle:{
         height: 50, 
         width: 50, 
         borderRadius: 50, 
         alignItems:"center", 
         flexDirection:"row"
        }
});

export default  Footer;


