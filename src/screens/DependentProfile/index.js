import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style.js';

import { NavigationContainer } from '@react-navigation/native';
import { MainHeader } from '../../components/Header/MainHeader.js';
import { Dependent } from '../../components/index.js';

export const DependentProfile = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>

            <MainHeader screenName="MEU PERFIL" />

            <View style={styles.container}>

                <ImageBackground>
                    <Dependent />
                </ImageBackground>

                <ScrollView>
                    <View>
                        <Text>MEDALHAS</Text>

                        <View>

                            <Image />
                            <Text>10</Text>

                            <Image />
                            <Text>10</Text>

                            <Image />
                            <Text>10</Text>
                            
                        </View>

                    </View>

                </ScrollView>

            </View>
        </View>
    );
}