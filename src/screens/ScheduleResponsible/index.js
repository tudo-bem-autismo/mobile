
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../assets/const';
import backgroundSchedule from '../../assets/images/backgroundSchedule.png';
import { Button, Dependent } from '../../components';
import { MainHeader } from '../../components/Header/MainHeader';
import { ModalCreateSchedule } from '../../components/Modal/ModalCreateSchedule';

import { ButtonSchedule } from '../../components/Button/ButtonSchedule';
import { ModalListingSchedule } from '../../components/Modal/ModalListingSchedule';
import { getResponsibleDependentsService } from '../../services';
import { Loading } from '../Loading';
import styles from './style';

export const ScheduleResponsible = ({ navigation }) => {

    const [modalCreateSchedule, setModalCreateSchedule] = useState(false);

    const [modalListingSchedule, setModalListingSchedule] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [dependents, setDependents] = useState([]);

    const [idDependent, setIdDependent] = useState(0);

    const getDependents = async () => {
        const result = await getResponsibleDependentsService()
        setDependents(result.data)

    }

    useEffect(() => {
        getDependents()
        setIsLoading(false)
    }, [])

    useEffect(() => {
        getDependents()
        setIsLoading()
    }, [dependents])

    return (

        <View style={styles.container}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <MainHeader
                        screenName="AGENDA"
                        navigation={navigation}
                    />

                    <View style={styles.scheduleContainer}>

                        <ImageBackground
                            source={backgroundSchedule}
                            style={styles.backgroundContainer}
                        >

                            <View
                                style={styles.dependentsContainer}
                            >
                                <ScrollView style={styles.scroll} horizontal={true}>

                                    {
                                        dependents.length ? (

                                            dependents.map(item => (
                                                <Dependent
                                                    name={item.name}
                                                    photo={item.photo}
                                                    key={item.id}
                                                    onPress={() => {

                                                        setIdDependent(item.id)
                                                        setModalListingSchedule(true)

                                                    }}
                                                />
                                            ))
                                        ) : (
                                            <View style={styles.noDependentsContainer}>

                                                <Text style={styles.noDependentsText}>Não há criança cadastrada no momento</Text>

                                                <View style={styles.noDependentsButton}>

                                                    <Button
                                                        label="CADASTRAR CRIANCA"
                                                        backgroundColor={COLORS.white}
                                                        borderRadius={25}
                                                        width={200}
                                                        height={45}
                                                        onPress={() => navigation.navigate('DependentListing')}
                                                    />
                                                </View>

                                            </View>
                                        )
                                    }
                                </ScrollView>
                            </View>

                            <View
                                style={styles.buttonContainer}
                            >

                                <ButtonSchedule
                                    label='CRIAR TAREFA'
                                    borderColor={COLORS.turquoise}
                                    onPress={() => setModalCreateSchedule(true)}
                                />

                            </View>


                        </ImageBackground>

                        {
                            modalListingSchedule && (
                                <View style={styles.modalContainer}>
                                    <ModalListingSchedule
                                        show={modalListingSchedule}
                                        close={() => setModalListingSchedule(false)}
                                        navigation={navigation}
                                        idDependent={idDependent}
                                    />
                                </View>
                            )
                        }


                        {
                            modalCreateSchedule && (

                                <View style={styles.modalContainer}>
                                    <ModalCreateSchedule
                                        show={modalCreateSchedule}
                                        close={() => setModalCreateSchedule(false)}
                                        navigation={navigation}
                                    />
                                </View>

                            )
                        }

                    </View>
                </>
            )}
        </View>

    );
}