import React from 'react';
import { View, Image } from 'react-native';

import styles from './style.js';

import calendar from '../../assets/images/calendar.png';
import reports from '../../assets/images/reports.png';
import geometricShapes from '../../assets/images/geometricShapes.png';
import { Button } from '../../components/index.js';

export function HomeScreen({ navigation }) {

    return (


        <View style={styles.mainContainer}>
            <View style={styles.footer}>
                <View style={styles.games}>
                    <Image
                        style={styles.geometricShapesContainer}
                        source={geometricShapes}
                    />

                    <Button
                        label="Menu"
                        onPress={ () => navigation.navigate('Menu') }
                    />

                </View>

            </View>

        </View>
    );
}