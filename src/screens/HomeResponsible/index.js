import React from 'react';

import { TabsResponsible } from '../../navigation/tabsResponsible.js';

import { NavigationContainer } from '@react-navigation/native';

export const HomeResponsible = ({ navigation }) => {

    return (
        <NavigationContainer>
            <TabsResponsible />
        </NavigationContainer>
    );
}