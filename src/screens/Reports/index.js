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
      },
      tooltip:{
        trigger: 'axis'
      },   
      series: [
        {
          data: values.errors,
          color: COLORS.missRed,
          type: "line",
        },
        {
          data: values.hits,
          color: COLORS.hitGreen,
          type: "line",

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
  // useEffect(() => {
  // setOptions({
  //   xAxis: {
  //     type: "category",
  //     data: [...dateErrorsKid],
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [...errorsKid],
  //       color: COLORS.missRed,
  //       type: "line",
  //     },
  //     {
  //       data: [...acertosKid],
  //       color: COLORS.hitGreen,
  //       type: "line",
  //     },
  //   ],
  // });

  //   setOptions(option);
  // });
  // console.log(options.series[0].data);

  // options.series[0].data

  // const handleOptions = (key, value) => {
  //   setOptions({
  //     ...options,
  //     [key]: value
  // })
  // }

  return (
    <View style={styles.container}>
      <MainHeader screenName={"RELATÓRIOS DOS JOGOS"} />

      <View style={styles.reportsContainer}>
        {chartIsLoading ? (<Loading />) : renderRelatory && (
          <View style={{width: "100%", flex: 1}}>
            <SafeAreaView style={{height: '180%'}}>
            <ECharts
              option={options} 
              backgroundColor={COLORS.white}
              additionalCode={additionalCode}
              onData={onData}  />
            </SafeAreaView>
          <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'row', }}>
            <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'row', marginRight: 25}}>
              <Text style={{marginRight: 5, fontSize: 15, fontWeight: 'bold'}}>Acertos:</Text>
              <View style={{width: 20, height: 20, backgroundColor: COLORS.hitGreen, borderRadius: 10}}/>
            </View>
            <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'row'}}>
              <Text style={{marginRight: 5, fontSize: 15, fontWeight: 'bold'}}>Erros:</Text>
              <View style={{width: 20, height: 20, backgroundColor: COLORS.missRed, borderRadius: 10}}/>
            </View>
          </View>
          </View>
          
      
        )}

        <Button
          label={"GERAR RELATÓRIO"}
          onPress={() => setModal(true)}
          backgroundColor={COLORS.pink}
          borderRadius={150}
          width={300}
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
