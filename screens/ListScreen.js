import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import globalStyles from '../styles/global';
import { Colors } from '../constants';
import CustomButton from '../components/CustomButton';
import Tasks from '../components/Tasks';
import { getTasks } from '../store/actions/taskAction';
import { setActiveListId } from '../store/actions/listActions';

const ListScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(true);
    const { id } = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks(() => setLoading(false)));
    }, [dispatch]);

    useEffect(() => {
        dispatch(setActiveListId(id));
    }, [dispatch, id]);

    if (loading) {
        return <ActivityIndicator color={Colors.primary} size="large" style={globalStyles.loader} />;
    }

    return (
        <View style={styles.container}>
            <Tasks navigation={navigation} listId={id} />
            <CustomButton text="Add new Detail" icon="add" iconColor="#fff" onPress={() => navigation.navigate('NewTask')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});

export default ListScreen;