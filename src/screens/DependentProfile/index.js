import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style.js';

import { NavigationContainer } from '@react-navigation/native';
import { MainHeader } from '../../components/Header/MainHeader.js';
import { Dependent, SessionResponsible } from '../../components/index.js';

import clouds from '../../assets/images/clouds.png';
import myProfile from '../../assets/images/myProfile.png';
import medalGold from '../../assets/icons/medalGold.png';
import medalSilver from '../../assets/icons/medalSilver.png';
import medalBronze from '../../assets/icons/medalBronze.png';
import profileResponsible from "../../assets/images/profileResponsible.png";
import { COLORS } from '../../assets/const/colors.js';
import { getKidService } from '../../services/kid.js';
import { Loading } from '../Loading/index.js';
import { getMedalsDependent } from '../../services/medal.js';

export const DependentProfile = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);

    const [dependent, setDependent] = useState([]);

    const [medals, setMedals] = useState([]);

    const getDependent = async () => {
        const result = await getKidService()
        setDependent(result.data)

    }

    const getMedalDependent = async () => {
        const result = await getMedalsDependent()
        setMedals(result.data)
    }

    useEffect(() => {
        getDependent()
        getMedalDependent()
        setIsLoading(false)

    }, [])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (


                <View style={styles.mainContainer}>

                    <MainHeader screenName="MEU PERFIL" />

                    <View style={styles.container}>

                        <ImageBackground
                            source={clouds}
                            style={styles.backgroundContainer}
                        >

                            <View style={styles.dependentContainer}>

                                <Dependent
                                    name={dependent.name}
                                    photo={{ uri: dependent.photo }}
                                />

                            </View>

                        </ImageBackground>


                        <View style={styles.cardsContainer}>
                            <ScrollView style={styles.scrollContainer}>

                                <View style={styles.cardContainer}>

                                    <Text style={styles.titleCard}>MEDALHAS</Text>

                                    <View style={styles.medalsContainer}>

                                        {
                                            medals.map(item => (

                                                <View
                                                    style={styles.medalContainer}
                                                    key={item.id}
                                                >

                                                    <Image
                                                        style={styles.imageMedal}
                                                        source={{ uri: item.medal }}
                                                    />

                                                    <Text style={styles.textMedal}>{item.amount}</Text>

                                                </View>

                                            ))
                                        }

                                    </View>



                                </View>

                                <View style={{ ...styles.cardContainer, backgroundColor: COLORS.yellowLight, borderColor: COLORS.yellowBold }}>

                                    <Text style={styles.titleCard}>SOBRE MIM</Text>

                                    <View style={styles.aboutDependentContainer}>

                                        <View style={styles.aboutContainer}>
                                            <Text style={styles.titleAbout}>Nome:</Text>
                                            <Text tyle={styles.infoAbout}>JENNNIFER</Text>
                                        </View>

                                        <View style={styles.aboutContainer}>
                                            <Text tyle={styles.titleAbout}>Data de nascimento:</Text>
                                            <Text tyle={styles.infoAbout}>04/07/2003</Text>
                                        </View>

                                        <View style={styles.aboutContainer}>
                                            <Text tyle={styles.titleAbout}>Genero:</Text>
                                            <Text tyle={styles.infoAbout}>FEMININO</Text>
                                        </View>

                                    </View>



                                </View>

                                <View style={{ ...styles.cardContainer, backgroundColor: COLORS.pink, borderColor: COLORS.pinkBold, height: 80, }}>

                                    <View style={styles.aboutDependentContainer}>

                                        <TouchableOpacity
                                        >

                                            <SessionResponsible
                                                image={profileResponsible}
                                                label="Perfil responsável"
                                                
                                            />

                                        </TouchableOpacity>

                                    </View>



                                </View>


                            </ScrollView>
                        </View>

                    </View>

                </View>
            )}
        </>
    );
}