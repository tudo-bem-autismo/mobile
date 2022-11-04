import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  processColor,
  SafeAreaView,
} from "react-native";
import styles from "./style";
import { MainHeader } from "../../components/Header/MainHeader";
import { Button } from "../../components";
import { COLORS } from "../../assets/const";
import { ModalReports } from "../../components";
import { ECharts } from "react-native-echarts-wrapper";
import { LineChart } from "react-native-charts-wrapper";
import { Loading } from "../Loading";

export const Reports = () => {
  const [modal, setModal] = useState(false);

  const [renderRelatory, setRenderRelatory] = useState(false);

  const [options, setOptions] = useState({});

  const [chartIsLoading, setChartIsLoading] = useState(false);

  const updateChart = (values) => {

    const chartOptions = {
      xAxis: {
        type: "category",
        data: values.dates,
        show: false
      },
      yAxis: {
        type: "value",
        axisLabel: {
          show: true,
          color: COLORS.black,
          fontSize: 14,
          fontWeight: 'bold'
        },
        minorSplitLine: {
          color: COLORS.black
        }
      },
      grid: {
        show: true,
        backgroundColor: COLORS.white,
        color: COLORS.black
      },
      legend: {
        data: ['Erros', 'Acertos'],
        itemHeight: 15,
        padding: [25, 25, 25, 25],
        icon: 'circle',
        textStyle: {
          fontWeight: "bold",
          color: COLORS.black,
          fontSize: 16
        },
      },
      
      tooltip:{
        trigger: 'axis'
      },   
      series: [
        { 
          name: 'Erros',
          data: values.errors,
          type: "line",
          symbol: 'circle',
          symbolSize: 10,
          lineStyle: {
            color: COLORS.missRed,
            width: 5,  
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: COLORS.black,
            color: COLORS.missRed
          }
        },
        {
          name: 'Acertos',
          data: values.hits,
          type: "line",
          symbol: 'circle',
          symbolSize: 10,
          lineStyle: {
            color: COLORS.hitGreen,
            width: 5,  
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: COLORS.black,
            color: COLORS.hitGreen
          }
        },
      ],
    }

    setOptions(chartOptions)
    setRenderRelatory(true)
  }

  const additionalCode = `
    chart.on('click', function(param) {
      var obj = {
      type: 'event_clicked',
      data: param.data
      };

      sendData(JSON.stringify(obj));
  });
  `;

  const onData = (param) => {
    const obj = JSON.parse(param);

    if (obj.type === "event_clicked") {
      console.log(obj);
    }
  };

  return (
    <View style={styles.container}>
      <MainHeader screenName={"RELATÓRIOS DOS JOGOS"} />

      <View style={styles.reportsContainer}>
        {chartIsLoading ? (<Loading />) : renderRelatory && (
          <View style={{width: "90%", flex: 1, marginBottom: '20%'}}>
            <SafeAreaView style={{height: '220%', borderWidth: 1}}>
            <ECharts
              option={options} 
              backgroundColor={COLORS.white}
              //additionalCode={additionalCode}
              //onData={onData}  
              />
            </SafeAreaView>
          </View>
          
      
        )}

        <Button
          label={"GERAR RELATÓRIO"}
          onPress={() => setModal(true)}
          backgroundColor={COLORS.pink}
          borderRadius={150}
          width={230}
          height={50}
        />
      </View>

      {modal && (
        <ModalReports
          close={() => setModal(false)}
          show={modal}
          updateChart={updateChart}
          setChartIsLoading={setChartIsLoading}
        />
      )}
    </View>
  );
};
