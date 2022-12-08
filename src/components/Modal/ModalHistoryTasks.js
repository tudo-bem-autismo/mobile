import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, Text, Image, ScrollView } from "react-native";
import { FONTS, COLORS } from "../../assets/const";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Dependent } from "../DependentListing";
import { getKidService } from "../../services";
import { getHistoryTask } from "../../services/task";
import { CardScheduleHistory } from "../ScheduleResponsible/CardScheduleHistory";
import notFoundTask from '../../assets/images/notFoundTask.gif';

const { height } = Dimensions.get('window')

export const ModalHistoryTasks = ({ close, idDependent, navigation }) => {


    const [dependent, setDependent] = useState({});

    const [completedTask, setCompletedTask] = useState() 

    const periods = [
        {
          "id": 1,
          "value": 1,
          "name": "Hoje"
        },
        {
          "id": 2,
          "value": 7,
          "name": "7 - Dias "
        },
        {
          "id": 3,
          "value": 31,
          "name": "31 - Dias"
        },
        {
          "id": 4,
          "value": 365,
          "name": "365 - Dias"
        },
  
    ]


    const getDependent = async () => {
        const result = await getKidService(idDependent);
        setDependent(result.data);
    };

    useEffect(() => {
        getDependent();
        

    }, []);

    const handleSelectedPeriod = (value) => {

        getHistory(value)
    } 

    const getHistory = async (period) => {
        const result = await getHistoryTask(idDependent, period)
        setCompletedTask(result.data)
    }

    return (

        <View style={style.container}>

            <View style={style.headerContainer}>

                <TouchableOpacity
                    style={style.backButton}
                    onPress={close}
                >

                    <MaterialIcons
                        name='chevron-left'
                        size={35}
                    />

                    <Text style={style.textBackButton}>Voltar</Text>


                </TouchableOpacity>

                <View style={style.dependentContainer}>

                    <Dependent
                        name={dependent.name}
                        photo={dependent.photo}
                    />

                </View>

            </View>

            <View style={style.listingContainer}>

                <View style={style.daysContainer}>

                    <View style={style.periodDate}>

                        <Picker
                            style={style.picker}
                            dropdownIconColor={COLORS.blue}
                            dropdownIconRippleColor={COLORS.purple}
                            onValueChange={(itemValue) => handleSelectedPeriod(itemValue)
                            }
                        >
                            <Picker.Item
                                label="Selecione o periodo"
                                value={[0]}
                                style={style.item}
                            />

                            {
                                periods.map((period) => (
                                    <Picker.Item
                                        key={period.id}
                                        label={period.name}
                                        value={period.value}
                                        style={style.item}
                                    />
                                ))
                            }

                        </Picker>

                    </View>

                </View>

                <View style={style.listingCardsContainer}>

                    <ScrollView style={style.cardsContainer}>

                        {
                            completedTask ? completedTask.map(item => (
                                <CardScheduleHistory
                                    image={item.tbl_tarefa.tbl_icone.icone}
                                    title={item.tbl_tarefa.tbl_icone.titulo}
                                    hour={item.data}
                                    key={item.id}
                                />
                            )) : 
                            (
                                <View style={style.notFoundCard}>
                                    <Text style={style.textNotFoundCard}>Nenhuma tarefa encontrada</Text>
                                    <Image
                                        style={style.imageNotFoundCard}
                                        source={notFoundTask} />
                                </View>
                            )
                        }


                        <View style={style.cardInvisible}></View>

                    </ScrollView>

                </View>

            </View>
        </View>
    );

}


const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    listingScheduleContainer: {
        width: '95%',
        height: '88%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.black,
        backgroundColor: COLORS.yellowLight,
    },
    headerContainer: {
        width: '100%',
        height: '7%',
        position: 'absolute',
        top: -100,
        marginTop: 20,
        flexDirection: 'row',
        // backgroundColor: COLORS.red,
    },
    backButton: {
        // backgroundColor: COLORS.red,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 40,
        marginBottom: 10,
    },
    textBackButton: {
        fontSize: 20,

    },
    dependentContainer: {
        // backgroundColor: COLORS.pink,
    },
    listingContainer: {
        flex: 1,
        marginTop: 70,
        // backgroundColor: COLORS.white,
        alignSelf: 'stretch'
    },
    selectedDayButton: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: COLORS.yellowBold,
        borderRadius: 10
    },
    daysContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.white,
    },
    dayButton: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {
        fontFamily: FONTS.mandali,
        fontSize: 15
    },
    listingCardsContainer: {
        height: '65%',
    },
    tasksContainer: {
        // paddingBottom: 50,
        // backgroundColor: COLORS.yellowBold
    },
    cardsContainer: {
        // backgroundColor: COLORS.red
        // height:'30%'

    },
    cardInvisible: {
        width: '92%',
        height: 10,
        marginTop: 20,
    },
    periodDate: {
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,

    },
    item: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        color: COLORS.gray

    },
    picker: {
        width: '100%',

    },
    notFoundCard: {
        margin: 15,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.red
    },
    textNotFoundCard: {
        fontFamily: FONTS.text,
        fontSize: 16,
        textAlign: 'center'
    },
    imageNotFoundCard: {
        width: '50%',
        height: '50%',
        // backgroundColor: COLORS.purple
    }
});

