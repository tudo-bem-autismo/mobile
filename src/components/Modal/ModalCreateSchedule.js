import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text, DatePickerIOSBase, Image } from "react-native";
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
import { getResponsibleDependentsService } from "../../services";
import { Dependent } from "../DependentListing/Dependent";
import { MaterialIcons } from "@expo/vector-icons";
import { ModalGaleryTasks } from "./ModalGaleryTasks";
import { scheduleCreateTaskDataSchema } from "../../utils/validations/Schedule";
import { InputGaleryTasks } from "../Input/InputGaleryTasks";


const { height } = Dimensions.get('window')

export const ModalCreateSchedule = ({ close, show }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [modalGaleryTasks, setModalGaleryTasks] = useState(false)

    const [dependents, setDependents] = useState([]);

    const [alarmDate, setAlarmDate] = useState(new Date());

    const [alarmHour, setAlarmHour] = useState('12:00');

    const [selectedDays, setSelectedDays] = useState([]);

    const [galeryHasError, setGaleryHasError] = useState(false);

    const [daysOfWeekHasError, setDaysOfWeekHasError] = useState(false);

    const [selectDependentHasError, setSelectDependentHasError] = useState(false);

    const [selectedDependents, setSelectedDependents] = useState([]);

    const DAYS_OFF_WEEK = [
        'DOM',
        'SEG',
        'TER',
        'QUA',
        'QUI',
        'SEX',
        'SAB',
    ]

    const WORKING_DAYS = [
        'SEG',
        'TER',
        'QUA',
        'QUI',
        'SEX'
    ]

    const WEEKEND_DAYS = [
        'SAB',
        'DOM'
    ]

    const manageDays = (day) => {

        const dayAlreadySelected = selectedDays.includes(day);

        if (dayAlreadySelected) {
            const newSelectedDays = selectedDays.filter(item => item !== day);

            return setSelectedDays(newSelectedDays);
        }

        setSelectedDays([
            ...selectedDays,
            day
        ])

        // console.log(selectedDays);

    }

    const manageDependents = (dependent) => {

        const dependentAlreadySelected = selectedDependents.includes(dependent);

        if (dependentAlreadySelected) {
            const newSelectedDependents = selectedDependents.filter(item => item !== dependent)

            return setSelectedDependents(newSelectedDependents)
        }

        setSelectedDependents([
            ...selectedDependents,
            dependent
        ])

        // console.log(selectedDependents);

    }

    const handleSelectDays = (days) => {

        setSelectedDays(days)

    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleHour = (date) => {

        const hour = format(date, 'HH:mm')

        setAlarmHour(hour)

        hideDatePicker();
    };

    const getDependents = async () => {
        const result = await getResponsibleDependentsService()
        setDependents(result.data)

    }

    useEffect(() => {
        getDependents()
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

    const initialValues = {
        title: '',
    }

    const handleForm = async (data) => {

        const newData = {
            ...data,
            alarmHour,
            selectedDays,
            selectedDependents
        };

        setGaleryHasError(true)
        setDaysOfWeekHasError(true)
        setSelectDependentHasError(true)
        console.log(newData)

    }

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

                <View style={style.scheduleContainer}>


                    <Formik
                        validationSchema={scheduleCreateTaskDataSchema}
                        initialValues={initialValues}
                        onSubmit={values => handleForm(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <>

                                <View style={style.formContainer}>

                                    <View style={style.headerContainer}>

                                        {/* <Text style={style.textTitle}>CRIAR TAREFA</Text> */}

                                        <MaterialIcons
                                            name="close"
                                            size={35}
                                            style={modalGaleryTasks ? style.invisibleCloseModalIcon : style.closeModalIcon}
                                            onPress={close}
                                        />

                                    </View>

                                    <Input
                                        title="TITULO"
                                        iconName="calendar-o"
                                        placeholder="Descreva a tarefa a ser criada"
                                        borderColor={COLORS.blue}
                                        backgroundColor={COLORS.white}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                        value={values.title}
                                        hasError={!!errors.title}
                                        errorMessage={errors.title}
                                    />

                                    <View style={style.dateTimeContainer}>

                                        <Text style={style.textDateTime}>DIA E HORA</Text>

                                        <View style={style.selectContainer}>

                                            <TouchableOpacity
                                                style={style.timeContainer}
                                                onPress={showDatePicker}
                                            >

                                                <View style={style.clockContainer}>
                                                    <Text style={style.textClock}>{alarmHour}</Text>
                                                    <Image
                                                        source={clock}
                                                        style={style.iconClock}
                                                    />
                                                </View>

                                                <DateTimePickerModal
                                                    isVisible={isDatePickerVisible}
                                                    mode="time"
                                                    onConfirm={handleHour}
                                                    onCancel={hideDatePicker}
                                                    date={alarmDate}
                                                    is24Hour={true}
                                                    style={{ backgroundColor: COLORS.yellow, width: 200, }}
                                                />

                                            </TouchableOpacity>


                                            <View style={style.periodDate}>

                                                <Picker
                                                    style={style.picker}
                                                    dropdownIconColor={COLORS.blue}
                                                    dropdownIconRippleColor={COLORS.purple}
                                                    onValueChange={(itemValue) => handleSelectDays(itemValue)}
                                                >

                                                    <Picker.Item
                                                        label="Selecionar dias"
                                                        value={[]}
                                                        style={style.item}
                                                    />
                                                    <Picker.Item
                                                        label="Todos os dias"
                                                        value={DAYS_OFF_WEEK}
                                                        style={style.item}
                                                    />
                                                    <Picker.Item
                                                        label="Seg a sex"
                                                        value={WORKING_DAYS}
                                                        style={style.item}
                                                    />
                                                    <Picker.Item
                                                        label="Final de semana"
                                                        value={WEEKEND_DAYS}
                                                        style={style.item}
                                                    />

                                                </Picker>

                                            </View>
                                        </View>

                                    </View>

                                    <View style={daysOfWeekHasError ? style.hasErrorDayButton : style.daysContainer}>

                                        {
                                            DAYS_OFF_WEEK.map(item => (

                                                <TouchableOpacity
                                                    style={selectedDays.includes(item) ? style.selectedDayButton : style.dayButton}
                                                    onPress={() => manageDays(item)}
                                                    key={item}
                                                >
                                                    <Text style={style.dayText}>{item}</Text>
                                                </TouchableOpacity>

                                            ))
                                        }

                                    </View>

                                    <InputGaleryTasks
                                        onPress={() => setModalGaleryTasks(true)}
                                        hasError={galeryHasError}
                                    />

                                    {
                                        modalGaleryTasks && (
                                            <View style={style.modalContainer}>
                                                <ModalGaleryTasks
                                                    show={modalGaleryTasks}
                                                    close={() => setModalGaleryTasks(false)}

                                                />
                                            </View>
                                        )
                                    }

                                    <View style={style.selectDependentsContainer}>

                                        <Text style={style.text}>SELECIONE A CRIANÇA</Text>

                                        <View style={style.dependentsContainer}>

                                            {
                                                dependents.map(item => (

                                                    <View 
                                                    style={selectDependentHasError ? style.hasErrorDependentButton : style.dependentButton}
                                                    key={item.id}
                                                    >

                                                        <Dependent
                                                            name={item.name}
                                                            photo={{ uri: item.photo }}
                                                            selected={selectedDependents.includes(item.id)}
                                                            onPress={() => manageDependents(item.id)}
                                                        />

                                                    </View>
                                                ))
                                            }

                                        </View>

                                    </View>

                                </View>

                                <TouchableOpacity
                                    style={modalGaleryTasks ? style.invisibleButtonContainer : style.buttonContainer}
                                    onPress={handleSubmit}
                                >
                                    <Text style={style.textButton}>CRIAR</Text>
                                </TouchableOpacity>

                            </>
                        )}
                    </Formik>

                </View>

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
        // backgroundColor: COLORS.red
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // bottom: 10,
        // backgroundColor: COLORS.beige
    },
    scheduleContainer: {
        // bottom: 0,
        // position: 'absolute',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.purple,
        backgroundColor: COLORS.purpleLight
    },
    formContainer: {
        flex: 1,
        margin: 15,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.white
    },
    headerContainer: {
        position: 'absolute',
        left: 285,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingLeft: 15,
        zIndex: 2,
        // paddingRight: 20,
        // backgroundColor: COLORS.darkBlue
    },
    textTitle: {
        fontSize: 25,
        fontFamily: FONTS.mandali,
        color: COLORS.purpleBold
    },
    text: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        marginLeft: 20,
    },
    textDateTime: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        marginLeft: 10,

    },
    dateTimeContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 10,
        // backgroundColor: COLORS.red
    },
    timeContainer: {
        width: 160,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.blue,
        backgroundColor: COLORS.white,
        borderRadius: 10,
    },
    clockContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 1,
        width: 150,
        height: 50,
        padding: 10
        // backgroundColor: COLORS.red
    },
    textClock: {
        fontSize: 20,
        color: COLORS.gray
    },
    iconClock: {
        width: 30,
        height: 30,
    },
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        color: COLORS.gray

    },
    picker: {
        width: 170,
        height: 10,

    },
    periodDate: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.blue,
        backgroundColor: COLORS.white,

    },
    daysContainer: {
        width: '95%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.blue,
        backgroundColor: COLORS.white,
        fontSize: 17,
        flexDirection: 'row',
        padding: 5
    },
    dependentsContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        // backgroundColor: COLORS.red
    },
    dependentButton: {

    },
    hasErrorDependentButton: {
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
        borderColor: COLORS.red
    },
    selectedDependentButton: {
        borderRadius: 10,
        backgroundColor: COLORS.purple
    },
    buttonContainer: {
        position: 'absolute',
        top: 450,
        left: 280,
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.gray,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.white,
        ...bottomShadow

    },
    invisibleButtonContainer: {
        position: 'absolute',
        top: 700,
        left: 280,
    },
    textButton: {
        fontSize: 15,
        marginTop: 25,
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
    selectedDayButton: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.blue,
        borderRadius: 50
    },
    hasErrorDayButton: {
        width: '95%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.red,
        backgroundColor: COLORS.white,
        fontSize: 17,
        flexDirection: 'row',
        padding: 5
    },
    selectDependentsContainer: {
        // backgroundColor q: COLORS.red,
        alignSelf: 'stretch',
        marginTop: 10

    },
    invisibleCloseModalIcon: {
        position: 'absolute',
        top: 700,
        left: 280,
    },
    closeModalIcon: {
        // paddingLeft: 300,
    }
});

