import React from 'react';
import { View, styleSheet, Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HOME</Text>
            <Button title="Add new list" onPress={() => navigation.navigate('NewList')} />
        </View>
    )
}

export default HomeScreen
