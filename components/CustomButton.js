import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';

const CustomButton = ({ onPress, text, round, icon, iconColor, danger, style }) => {
    let btnStyle = { ...styles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...styles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...styles.danger };
    }
    return (
        <TouchableHighlight onPress={onPress} activeOpacity={0.8} style={!round ? styles.round : {}}>
            <View style={styles.container}>
                {icon && <Icon name={icon} size={24} color={iconColor} style={styles.icon} />}
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        color: '#fff',
    },
    icon: {
        marginRight: 5,
    },
    danger: {
        backgroundColor: Colors.danger,
    },
    round: {
        borderRadius: 30,
    },
});

export default CustomButton
