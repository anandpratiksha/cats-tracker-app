import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, styleSheet, Alert, ToastAnroid } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import AddListScreen from '../screens/AddListScreen';
import { Colors } from '../constants';

const TasksStackNavigator = createStackNavigator();

const defaultStyles = {
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
}

const TasksNavigator = () => {
    return (
        <TasksStackNavigator.Navigator>
            <TasksStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ ...defaultStyles, title: 'Cats Tracker App', headerTitleAlign: 'center' }}
            />
            <TasksStackNavigator.Screen
                name="NewList"
                component={AddListScreen}
                options={{ ...defaultStyles, title: 'Add new List' }}
            />
        </TasksStackNavigator.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TasksNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator
