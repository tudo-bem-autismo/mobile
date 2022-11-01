import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './style.js';

import { NavigationContainer } from '@react-navigation/native';
import { TabsDependent } from '../../navigation/tabsDependent.js';

export const HomeDependent = ({ navigation }) => {

    return (
        <NavigationContainer>
            <TabsDependent />
        </NavigationContainer>
    );
}