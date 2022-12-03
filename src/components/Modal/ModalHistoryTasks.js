import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text, Image, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import clock from '../../assets/icons/clock.png';
import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../Input";
import { Picker } from "@react-native-picker/picker";
import { InputGaleryTasks } from "../Input/InputGaleryTasks";
import { ModalGaleryTasks } from "./ModalGaleryTasks";
import { Dependent } from "../DependentListing";

import brushingTeeth from '../../assets/images/brushingTeeth.png';
import { CardSchedule } from "../ScheduleResponsible/CardSchedule";
import { getKidService } from "../../services";
import { CardScheduleHistory } from "../ScheduleResponsible/CardScheduleHistory";

const { height } = Dimensions.get('window')

export const ModalHistoryTasks = ({ close, idDependent, navigation }) => {

    const [showDoneTaskModal, setShowDoneTaskModal] = useState(false);

    const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

    const [showEditTaskModal, setShowEditTaskModal] = useState(false);

    const [showHistoryTaskModal, setShowHistoryTaskModal] = useState(false);

    const [dependent, setDependent] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [selectedDay, setSelectedDay] = useState([]);

    const [isTask, setIsTask] = useState([
        {
            'id': 1,
            'title': 'escovar os dentes',
            'image': brushingTeeth,
            'hour': '08:00'
        },
        {
            'id': 2,
            'title': 'Pentear o cabelo',
            'image': brushingTeeth,
            'hour': '09:00'
        },
        {
            'id': 3,
            'title': 'Tomar os remedios',
            'image': brushingTeeth,
            'hour': '10:00'
        },
        {
            'id': 4,
            'title': 'Tomar os remedios',
            'image': brushingTeeth,
            'hour': '10:00'
        },
        {
            'id': 5,
            'title': 'Tomar os remedios',
            'image': brushingTeeth,
            'hour': '10:00'
        },
    ]);

    const [checkedTasks, setCheckedTasks] = useState([]);

    const DAYS_OFF_WEEK = [
        'DOM',
        'SEG',
        'TER',
        'QUA',
        'QUI',
        'SEX',
        'SAB',
    ]

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
        setIsLoading(false)

    }, []);

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
                        photo={{ uri: dependent.photo }}
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
                            onValueChange={(itemValue) => handleSelectDays(itemValue)
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
                            isTask.map(item => (
                                <CardScheduleHistory
                                    image={item.image}
                                    title={item.title}
                                    hour={item.hour}
                                    key={item.id}
                                />
                            ))
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
        height: 450,
    },
    tasksContainer: {
        // paddingBottom: 50,
        // backgroundColor: COLORS.yellowBold
    },
    cardsContainer: {
        // backgroundColor: COLORS.red
    },
    cardInvisible: {
        width: '92%',
        height: 10,
        marginTop: 20,
    },
    periodDate: {
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
        width: 190,

    },
});

