import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux';
import CustomButton from '../components/CustomButton';
import Lists from '../components/Lists';
import { Colors } from '../constants';
import { getLists } from '../store/actions/listActions';
import globalStyles from '../styles/global'

const HomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLists(() => setLoading(false)));
    }, [dispatch]);

    if (loading) {
        return <ActivityIndicator color={Colors.primary} size="large" style={globalStyles.loader} />;
    }

    return (
        <View style={styles.container}>
            <Lists />
            <CustomButton text="Add New List" icon="add" iconColor="#fff" onPress={() => navigation.navigate('NewList')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen
