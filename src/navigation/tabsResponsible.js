import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RoutineResponsible } from '../screens/RoutineResponsible';
import { Reports } from '../screens/Reports';
import { Games } from '../screens/Games';
import { COLORS } from '../assets/const';
import { Image, StyleSheet, Text, View } from 'react-native';

import routine from '../assets/icons/routine.png';
import games from '../assets/icons/games.png';
import reports from '../assets/icons/reports.png'

export const TabsResponsible = ({ navigation }) => {

    const Tab = createBottomTabNavigator()

    return (

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.navigationContainer, ...styles.shadow }
            }}
            initialRouteName="Games"
        >
            <Tab.Screen
                name="RoutineResponsible"
                component={RoutineResponsible}
                navigation={navigation}
                options={{
                    tabBarIcon: ({ focused }) =>

                    (

                        <View style={styles.container}>

                            <View style={focused && styles.selectedItem}>
                                <Image
                                    source={routine}
                                    style={styles.imageItem}
                                />
                            </View>

                            <Text style={styles.screenName}>ROTINA</Text>

                        </View>

                    )

                }}
            />
            <Tab.Screen
                name="Games"
                component={Games}
                options={{
                    tabBarIcon: ({ focused }) =>

                    (

                        <View style={styles.container}>

                            <View style={focused && styles.selectedItem}>
                                <Image
                                    source={games}
                                    style={styles.imageItem}
                                />
                            </View>

                            <Text style={styles.screenName}>GAMES</Text>
                        </View>

                    )

                }}
            />
            <Tab.Screen
                name="Reports"
                component={Reports}
                options={{
                    tabBarIcon: ({ focused }) =>

                    (

                        <View style={styles.container}>

                            <View style={focused && styles.selectedItem}>
                                <Image
                                    source={reports}
                                    style={styles.imageItem}
                                />
                            </View>

                            <Text style={styles.screenName}>RELATÓRIOS</Text>
                        </View>

                    )

                }}
            />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    navigationContainer: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: COLORS.pink,
        borderRadius: 15,
        height: 90,
    },
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    imageItem: {
        width: 50,
        height: 50,
    },
    screenName: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: COLORS.white
    },
    selectedItem: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50,
        borderRadius: 40,
        borderWidth: 1,
        borderStyle: "dashed",
        backgroundColor: COLORS.white
    }

})