import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResponsibleManagement } from "../screens/ResponsibleManagement";
import { ResponsiblePassword } from "../screens/ResponsibleManagement/responsiblePassword";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Management" component={ResponsibleManagement} options={{headerShown: false}}/>
                <Stack.Screen name="Password" component={ResponsiblePassword} options={{headerShown: false}}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;