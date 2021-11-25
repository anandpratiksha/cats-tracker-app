import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../constants';
import { getLists } from '../store/actions/listActions';
import globalStyles from '../styles/global';
import Lists from '../components/Lists';
import CustomButton from '../components/CustomButton';

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
            <Lists navigation={navigation} />
            <CustomButton text="Add new list" icon="add" iconColor="#fff" onPress={() => navigation.navigate('NewList')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
