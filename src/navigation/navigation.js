import React from "react";
import {ScrollView, StyleSheet} from 'react-native';
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
                    <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
                    <Stack.Screen name="OnboardingGames" component={OnboardingGames} options={{headerShown: false}}/>
                    <Stack.Screen name="OnboardingRoutines" component={OnboardingRoutines} options={{headerShown: false}}/>
            </Stack.Navigator>
            </NavigationContainer>

    );
};



export default Navigation;