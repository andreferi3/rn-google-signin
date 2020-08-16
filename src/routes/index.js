import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

// * Screens
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createStackNavigator()

export default function index() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                initialRouteName="Login">
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Dashboard' component={DashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
