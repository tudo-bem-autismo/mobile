import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { MainHeader } from '../../components/Header/MainHeader';
import { Button } from '../../components';
import { COLORS } from '../../assets/const';
import { ModalReports } from '../../components';

export const Reports = () => {

    const [modal, setModal] = useState(false);

    return (

        <View style={styles.container}>
            <MainHeader screenName={'RELATÓRIOS DOS JOGOS'}/>

            <View style={styles.reportsContainer}>
                <Button
                    label={'GERAR RELATÓRIO'}
                    onPress={() => setModal(true)}
                    backgroundColor={COLORS.pink}
                    borderRadius={150}
                    width={300}
                    height={50}/>
            </View>

            {modal && (
                <ModalReports  
                    close={() => setModal(false)}
                    show={modal}
                    />
            )}

        </View>

     
    );
}