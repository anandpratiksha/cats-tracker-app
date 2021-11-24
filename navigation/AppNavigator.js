import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, styleSheet, Alert, ToastAnroid } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import AddListScreen from '../screens/AddListScreen';

const TasksStackNavigator = createStackNavigator();

const TasksNavigator = () => {
    return (
        <TasksStackNavigator.Navigator>
            <TasksStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Your Lists', headerTitleAlign: 'center' }}
            />
            <TasksStackNavigator.Screen
                name="NewList"
                component={AddListScreen}
                options={{ title: 'Add new List' }}
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
