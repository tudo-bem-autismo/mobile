
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../assets/const';
import { MainHeader } from '../../components/Header/MainHeader';
import { getResponsibleDependentsService } from '../../services';

import { ModalButtonSuport } from '../../components';
import { Dependent } from "../../components/DependentListing/Dependent";
import { Loading } from '../Loading';
import styles from './style';

export const SupportButton = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [dependents, setDependents] = useState([]);

    const [idDependents, setIdDependents] = useState(0);

    const getDependents = async () => {
        const result = await getResponsibleDependentsService()
        setDependents(result.data)

    }

    useEffect(() => {
        getDependents()
        setIsLoading(false)
    }, [])

    return (

        <View style={styles.container}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <MainHeader
                        screenName="BOTÃO DE APOIO"
                        navigation={navigation}
                    />

                    <View style={styles.gamesContainer}>

                        <Text style={styles.textSelectGame}>
                            gerencie os arquivos das suas crianças
                        </Text>

                        <Text style={{ marginBottom: 30, fontWeight: '400', fontSize: 20 }}>
                            SELECIONE A CRIANÇA
                        </Text>

                        <ScrollView style={styles.listGames}>

                            <View style={styles.listGamesContainer}>


                                {
                                    dependents.map(item => (
                                        <View
                                            style={{ width: 300, height: 360, backgroundColor: COLORS.pink, marginBottom: 30, padding: 40 }}
                                            key={item.id}>
                                            <Dependent
                                                name={item.name}
                                                photo={item.photo}
                                                onPress={() => { }}
                                            />
                                            <View
                                                style={style.buttonContainer}
                                                onPress={() => onPress()}>
                                                <TouchableOpacity
                                                    onPress={() => { setModal(true); setIdDependents(item.id) }}
                                                    style={style.button}>
                                                    <Text style={style.textButton}>CRIAR</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={style.button}
                                                    onPress={() => navigation.navigate('SupportButtonManagement', { idDependents: item.id })}
                                                >
                                                    <Text style={style.textButton}>EDITAR</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    ))
                                }

                            </View>

                        </ScrollView>
                    </View>

                    {modal && (
                        <ModalButtonSuport
                            close={() => setModal(false)}
                            idCrianca={idDependents}
                            show={modal}
                        />
                    )}

                </>
            )}
        </View>



    );
}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    buttonContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        ...bottomShadow

    },
    textButton: {
        fontFamily: FONTS.title,
        textAlign: 'center',
    },
    text: {
        marginTop: 30,
    }
});
