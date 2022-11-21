
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../assets/const';
import { Button } from '../../components';
import { MainHeader } from '../../components/Header/MainHeader';
import { ModalCreateSchedule } from '../../components/Modal/ModalCreateSchedule';

import styles from './style';

export const ScheduleResponsible = ({ navigation }) => {

    const [modalCreateSchedule, setModalCreateSchedule] = useState(false);

    return (

        <View style={styles.container}>

            <MainHeader
                screenName="AGENDA"
                navigation={navigation}
            />

            <View style={styles.scheduleContainer}>

                <Button
                    label="CRIAR"
                    width={100}
                    height={50}
                    backgroundColor={COLORS.purple}
                    onPress={() => setModalCreateSchedule(true)}
                />

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

        </View>

    );
}