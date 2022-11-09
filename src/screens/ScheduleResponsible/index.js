
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from '../../components';
import { MainHeader } from '../../components/Header/MainHeader';

import styles from './style';

export const ScheduleResponsible = ({ navigation }) => {

    // const [modal, setModal] = useState(false);

    return (

        <View style={styles.container}>
            
                    <MainHeader
                        screenName="AGENDA"
                        navigation={navigation}
                    />

                    <View style={styles.scheduleContainer}>

                        <Button label="CRIAR" width={100}/>

                    </View>

        </View>

    );
}