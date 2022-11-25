import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text, DatePickerIOSBase, Image, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { format } from "date-fns";

import modalBackground from '../../assets/images/modalBackground.png';
import clock from '../../assets/icons/clock.png';
import { FONTS, COLORS } from "../../assets/const";
import { BackButton, Button } from "../Button";
import { Formik } from "formik";
import { Input, MaskedInput } from "../Input";
import { Picker } from "@react-native-picker/picker";
import { getKidService, getResponsibleDependentsService } from "../../services";
import { Dependent } from "../DependentListing/Dependent";
import { MaterialIcons } from "@expo/vector-icons";
import { ModalGaleryTasks } from "./ModalGaleryTasks";
import { scheduleCreateTaskDataSchema } from "../../utils/validations/Schedule";
import { InputGaleryTasks } from "../Input/InputGaleryTasks";
import { Loading } from "../../screens/Loading";

import brushingTeeth from '../../assets/images/brushingTeeth.png';
import { CardSchedule } from "../ScheduleResponsible/CardSchedule";


const { height } = Dimensions.get('window')

export const ModalListingSchedule = ({ close, show, navigation, idDependent }) => {

    const [dependent, setDependent] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [selectedDay, setSelectedDay] = useState([]);

    const [daysOfWeekHasError, setDaysOfWeekHasError] = useState(false);

    const DAYS_OFF_WEEK = [
        'DOM',
        'SEG',
        'TER',
        'QUA',
        'QUI',
        'SEX',
        'SAB',
    ]

    const getDependent = async () => {
        const result = await getKidService(idDependent);
        setDependent(result.data);
    };

    useEffect(() => {
        getDependent();
        setIsLoading(false)

    }, []);

    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
        ]).start()
    }

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
    }, [show])

    return (

        <Animated.View
            style={[style.container, {
                opacity: state.opacity,
                transform: [
                    { translateY: state.container }
                ]
            }]}
        >
            <Animated.View
                style={[style.modalContainer, {
                    transform: [
                        { translateY: state.modal }
                    ]
                }]}
            >

                {isLoading ? (
                    <Loading />
                ) : (
                    <>

                        <View style={style.listingScheduleContainer}>

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

                                <Button
                                    label='HISTORICO'
                                    backgroundColor={COLORS.white}
                                    borderRadius={20}
                                    width={100}
                                    height={35}
                                />

                            </View>

                            <View style={style.listingContainer}>

                                <View style={style.daysContainer}>

                                    {
                                        DAYS_OFF_WEEK.map(item => (

                                            <TouchableOpacity
                                                style={selectedDay.includes(item) ? style.selectedDayButton : style.dayButton}
                                                onPress={() => setSelectedDay(item)}
                                                key={item}
                                            >
                                                <Text style={style.dayText}>{item}</Text>
                                            </TouchableOpacity>

                                        ))
                                    }

                                </View>

                                <View style={style.listingCardsContainer}>

                                    <ScrollView style={style.cardsContainer}>

                                        {/* <View style={style.tasksContainer}> */}

                                        <CardSchedule
                                            image={brushingTeeth}
                                            title='Escovar os dentes'
                                            hour='08:00'
                                        />

                                        <CardSchedule
                                            image={brushingTeeth}
                                            title='Escovar os dentes'
                                            hour='08:00'
                                        />

                                        <CardSchedule
                                            image={brushingTeeth}
                                            title='Escovar os dentes'
                                            hour='08:00'
                                        />

                                        <CardSchedule
                                            image={brushingTeeth}
                                            title='Escovar os dentes'
                                            hour='08:00'
                                        />

                                        <CardSchedule
                                            image={brushingTeeth}
                                            title='Escovar os dentes'
                                            hour='08:00'
                                        />

                                        <CardSchedule
                                            image={brushingTeeth}
                                            title='Escovar os dentes'
                                            hour='08:00'
                                        />

                                        <CardSchedule
                                            image={brushingTeeth}
                                            title='Escovar os dentes'
                                            hour='08:00'
                                        />

                                        <View style={style.cardInvisible}></View>

                                        {/* </View> */}

                                    </ScrollView>

                                </View>

                            </View>



                        </View>
                    </>
                )}

            </Animated.View>
        </Animated.View >

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
        width: '92%',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        padding: 5,
        marginLeft: 15
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
        height: 350,
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
    }
});

