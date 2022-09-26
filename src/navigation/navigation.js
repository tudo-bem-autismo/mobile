import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home";
import { ResponsiveLogin } from "../screens/Login";
import { ResponsiveRegister } from "../screens/ResponsibleRegister";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResponsibleManagement } from "../screens/ResponsibleManagement";
import { ResponsiblePassword } from "../screens/ResponsibleManagement/responsiblePassword";
import { DependentListing } from "../screens/DependentListing";
import { Menu } from "../screens/Menu";
import { ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from "../screens/Onboarding";
import { OnboardingGames } from "../screens/OnboardingGames";
import { OnboardingRoutines } from "../screens/OnboardingRoutines";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Login" component={ResponsiveLogin} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={ResponsiveRegister} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="Management" component={ResponsibleManagement} options={{ headerShown: false }} />
                <Stack.Screen name="Password" component={ResponsiblePassword} options={{ headerShown: false }} />
                <Stack.Screen name="DependentListing" component={DependentListing} options={{ headerShown: false }} />
                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingGames" component={OnboardingGames} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingRoutines" component={OnboardingRoutines} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;