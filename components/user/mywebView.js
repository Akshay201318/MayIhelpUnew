import React from 'react'
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native'


 const mywebView = ({html}) => {
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: html }}
        />
    )
}

export default mywebView;