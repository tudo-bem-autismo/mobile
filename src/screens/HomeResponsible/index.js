import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';

import styles from './style.js';

import { TabsResponsible } from '../../navigation/tabsResponsible.js';

import { NavigationContainer } from '@react-navigation/native';

export const HomeResponsible = ({ navigation }) => {

    return (
        <NavigationContainer>
            <TabsResponsible />
        </NavigationContainer>
    );
}