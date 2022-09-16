import React from "react";
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home";
import { ResponsiveLogin } from "../screens/Login";
import { ResponsiveRegister } from "../screens/ResponsibleRegister";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Login" component={ResponsiveLogin} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={ResponsiveRegister} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;