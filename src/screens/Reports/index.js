import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { MainHeader } from '../../components/Header/MainHeader';
import { Button } from '../../components';
import { COLORS } from '../../assets/const';
import { ModalReports } from '../../components'; 
import { ECharts } from "react-native-echarts-wrapper";

export const Reports = () => {

    const [modal, setModal] = useState(false);

    const options = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar"
          },
        ]
      };

      

    return (

        <View style={styles.container}>
            <MainHeader screenName={'RELATÓRIOS DOS JOGOS'}/>

            <View style={styles.reportsContainer}>

                <View style={{flex: 1, backgroundColor: COLORS.pink, width: '100%'}}>
                    <ECharts
                        option={options}
                        backgroundColor={COLORS.white}/>
                </View>
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