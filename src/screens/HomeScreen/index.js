import React from 'react';
import { Image, View } from 'react-native';

import styles from './style.js';

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
                        onPress={() => navigation.navigate('Menu')}
                    />

                </View>

            </View>

        </View>
    );
}