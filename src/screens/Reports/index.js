import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { MainHeader } from '../../components/Header/MainHeader';
import { Button } from '../../components';
import { COLORS } from '../../assets/const';
import { ModalReports } from '../../components'; 
import { ECharts } from "react-native-echarts-wrapper";
import { BarChart, Grid } from 'react-native-charts-wrapper';



export const Reports = () => {

    const [modal, setModal] = useState(false);

    const [renderRelatory, setRenderRealatory] = useState(false)

    const options = {
      xAxis: {
        type: "category",
        data: ["20/10", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        },
      ]
    };


    

      

    return (

        <View style={styles.container}>
         
            <MainHeader screenName={'RELATÓRIOS DOS JOGOS'}/>

            <View style={styles.reportsContainer}>

            {
              renderRelatory ? 
                <View style={{flex: 1, width: '100%'}}>
                  <View style={{alignItems: "center", marginBottom: 0}}>
                    <Text>Erros</Text>
                  </View>
                  <ECharts
                      option={options}
                      backgroundColor={COLORS.white}/>
                </View> 
              : null
            }

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
                    onClick={()=> setRenderRealatory(true)}
                    />
            )}

        </View>

     
    );
}