
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../assets/const';
import { Button, Dependent } from '../../components';
import { MainHeader } from '../../components/Header/MainHeader';
import { ModalCreateSchedule } from '../../components/Modal/ModalCreateSchedule';
import backgroundSchedule from '../../assets/images/backgroundSchedule.png';

import styles from './style';
import { Loading } from '../Loading';
import { getResponsibleDependentsService } from '../../services';
import { ButtonSchedule } from '../../components/Button/ButtonSchedule';
import { ModalListingSchedule } from '../../components/Modal/ModalListingSchedule';

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
                                {
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
                                }
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