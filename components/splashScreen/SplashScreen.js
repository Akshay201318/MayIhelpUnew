import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../../public/images/launch_screen.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height:'100%'
    },
    stretch: {
        width: '100%',
        height:'100%'
    },
  });
