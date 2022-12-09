import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { TabsDependent } from '../../navigation/tabsDependent.js';

export const HomeDependent = ({ navigation }) => {

    return (
        <NavigationContainer>
            <TabsDependent />
        </NavigationContainer>
    );
}