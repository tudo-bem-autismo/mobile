import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style.js';

import { NavigationContainer } from '@react-navigation/native';
import { MainHeader } from '../../components/Header/MainHeader.js';
import { Dependent, SessionResponsible } from '../../components/index.js';

import clouds from '../../assets/images/clouds.png';
import profileResponsible from "../../assets/images/profileResponsible.png";
import { COLORS } from '../../assets/const/colors.js';
import { getKidService } from '../../services/kid.js';
import { Loading } from '../Loading/index.js';
import { getMedalsDependent } from '../../services/medal.js';
import { MainHeaderDependent } from '../../components/Header/MainHeaderDependent.js';
import { getData } from '../../utils/storage/index.js';

export const DependentProfile = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);

    const [dependent, setDependent] = useState([]);

    const [medals, setMedals] = useState([]);

    const getDependent = async () => {

        const idDependent = await getData('@idDependent')

        const result = await getKidService(idDependent)

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

                    <MainHeaderDependent screenName="MEU PERFIL" />

                    <View style={styles.container}>

                        <ImageBackground
                            source={clouds}
                            style={styles.backgroundContainer}
                        >

                            <View style={styles.dependentContainer}>

                                <Dependent
                                    photo={dependent.photo}
                                />

                            </View>

                        </ImageBackground>


                        <View style={styles.cardsContainer}>

                            <ScrollView
                                persistentScrollbar={true}
                                style={styles.scrollContainer}
                            >

                                <View style={{ ...styles.cardContainer, backgroundColor: COLORS.yellowLight, borderColor: COLORS.yellowBold }}>

                                    <Text style={styles.titleCard}>SOBRE MIM</Text>

                                    <View style={styles.aboutDependentContainer}>

                                        <View style={styles.aboutContainer}>
                                            <Text style={styles.titleAbout}>Nome:</Text>
                                            <Text style={styles.infoAbout}>{dependent.name}</Text>
                                        </View>

                                        <View style={styles.aboutContainer}>
                                            <Text style={styles.titleAbout}>Data de nascimento:</Text>
                                            <Text style={styles.infoAbout}>{dependent.date}</Text>
                                        </View>

                                        <View style={styles.aboutContainer}>
                                            <Text style={styles.titleAbout}>Gênero:</Text>
                                            <Text style={styles.infoAbout}>{dependent.gender}</Text>
                                        </View>

                                    </View>

                                </View>

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



                                <View style={{ ...styles.cardContainer, backgroundColor: COLORS.pink, borderColor: COLORS.pinkBold, height: 80, }}>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('MenuDependent')}
                                        style={styles.button}
                                    >
                                        <Image source={profileResponsible} />
                                        <Text style={styles.titleButton}>PERFIL RESPONSAVEL</Text>

                                    </TouchableOpacity>


                                </View>

                                <View style={styles.card} />


                            </ScrollView>

                        </View>

                    </View>

                </View>
            )}
        </>
    );
}