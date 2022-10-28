import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  processColor,
} from "react-native";
import styles from "./style";
import { MainHeader } from "../../components/Header/MainHeader";
import { Button } from "../../components";
import { COLORS } from "../../assets/const";
import { ModalReports } from "../../components";
import { ECharts } from "react-native-echarts-wrapper";
import { LineChart } from "react-native-charts-wrapper";

export const Reports = () => {
  const [modal, setModal] = useState(false);

  const [errorsKid, setErrorsKid] = useState([]);

  const [acertosKid, setAcertosKid] = useState([]);

  const [dateErrorsKid, setDateErrorsKid] = useState([]);

  const [renderRelatory, setRenderRealatory] = useState(options);

  const [options, setOptions] = useState({});

  useEffect(() => {
    const option = {
      xAxis: {
        type: "category",
        data: [...dateErrorsKid],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [...errorsKid],
          color: COLORS.missRed,
          type: "line",
        },
        {
          data: [...acertosKid],
          color: COLORS.hitGreen,
          type: "line",
        },
      ],
    };

    setOptions(option);
  });
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
        {renderRelatory ? (
          <View style={{ flex: 1, width: "100%" }}>
            <View style={{ alignItems: "center", marginBottom: 0 }}>
              <Text>{acertosKid}</Text>
            </View>
            <ECharts option={options} backgroundColor={COLORS.white} />
          </View>
        ) : null}

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
          onClick={() => setRenderRealatory(true)}
          setErrorsKid={setErrorsKid}
          setDateErrorsKid={setDateErrorsKid}
          setAcertosKid={setAcertosKid}
        />
      )}
    </View>
  );
};
