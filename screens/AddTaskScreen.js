import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, TextInput, Keyboard, Alert, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { Colors } from '../constants';
import globalStyles from '../styles/global';
import { createTask } from '../store/actions/taskAction';

const AddTaskScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.task);
    const { activeListId } = useSelector(state => state.list);

    const submitHandler = () => {
        if (name.trim() === '') {
            return Alert.alert('Validation', 'Detail is required!');
        }
        const alreadyExist = tasks.find(t => t.name.toLowerCase() === name.trim().toLowerCase() && t.listId === activeListId);
        if (alreadyExist) {
            return Alert.alert('Validation', 'Details with this name already exist in this list!');
        }

        dispatch(createTask(
            name,
            activeListId,
            () => {
                ToastAndroid.show(`Cat Detail "${name}" created!`, ToastAndroid.LONG);
                Keyboard.dismiss();
                navigation.goBack();
            },
            () => { ToastAndroid.show('Something went wrong, please try again!', ToastAndroid.LONG); },
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput style={globalStyles.input} value={name} onChangeText={(val) => setName(val)} placeholder="Breed/Description" placeholderTextColor={Colors.tertiary} />
                <CustomButton text="Submit" onPress={submitHandler} round />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#fff',
        flex: 1,
    },
});

export default AddTaskScreen;