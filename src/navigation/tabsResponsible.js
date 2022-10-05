import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RoutineResponsible } from '../screens/RoutineResponsible';
import { Reports } from '../screens/Reports';
import { Games } from '../screens/Games';
import { COLORS } from '../assets/const';

export const TabsResponsible = ({ navigation }) => {
    
    const Tab = createBottomTabNavigator()

    return (

        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
            
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: COLORS.pink,
                borderRadius: 15,
                height: 90,
            }
        }}
        >
            <Tab.Screen name="RoutineResponsible" component={RoutineResponsible} navigation={navigation}/>
            <Tab.Screen name="Games" component={Games}/>
            <Tab.Screen name="Reports" component={Reports}/>
        </Tab.Navigator>

    );
}