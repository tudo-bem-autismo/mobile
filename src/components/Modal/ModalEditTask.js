import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Toast from "react-native-toast-message";

import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import { COLORS, FONTS } from "../../assets/const";
import clock from '../../assets/icons/clock.png';
import { DAYS_OFF_WEEK, DAYS_OFF_WEEK_EDIT, WEEKEND_DAYS, WORKING_DAYS } from '../../utils/date/days';
import { Dependent } from "../DependentListing";
import { Input } from "../Input";
import { InputGaleryTasks } from "../Input/InputGaleryTasks";
import { ModalGaleryTasks } from "./ModalGaleryTasks";
import { getResponsibleDependentsService } from "../../services";
import { getTaskByIdService, updateTaskService } from "../../services/task";
import { Loading } from "../../screens/Loading";
import { scheduleEditTaskDataSchema } from "../../utils/validations/Schedule";
import { format } from "date-fns";
import { getDaysService } from "../../services/day";


const { height } = Dimensions.get('window')

export const ModalEditTask = ({ close, navigation, idTask }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [modalGaleryTasks, setModalGaleryTasks] = useState(false)

    const [dependents, setDependents] = useState([]);

    const [alarmDate, setAlarmDate] = useState(new Date());

    const [alarmHour, setAlarmHour] = useState('12:00');

    const [selectedDaysIds, setSelectedDaysIds] = useState([]);

    const [galeryHasError, setGaleryHasError] = useState(false);

    const [daysOfWeekHasError, setDaysOfWeekHasError] = useState(false);

    const [selectDependentHasError, setSelectDependentHasError] = useState(false);

    const [selectedDependents, setSelectedDependents] = useState([]);

    const [galeryTask, setGaleryTask] = useState(null);

    const [imageTask, setImageTask] = useState(null);

    const [task, setTask] = useState({});

    const [idIcon, setIdIcon] = useState(0);

    const [daysOfWeek, setDaysOfWeek] = useState([{}]);

    const [isLoading, setIsLoading] = useState(true);

    const manageDays = (idDay) => {

        const dayAlreadySelected = selectedDaysIds.includes(idDay);

        if (dayAlreadySelected) {
            const newSelectedDays = selectedDaysIds.filter(item => item !== idDay);

            return setSelectedDaysIds(newSelectedDays);
        }

        setSelectedDaysIds([
            ...selectedDaysIds,
            idDay
        ])

        // console.log(selectedDays);

    }

    const manageDependents = (idDependent) => {

        const dependentAlreadySelected = selectedDependents.includes(idDependent);

        if (dependentAlreadySelected) {
            const newSelectedDependents = selectedDependents.filter(item => item !== idDependent)

            return setSelectedDependents(newSelectedDependents)
        }

        setSelectedDependents([
            ...selectedDependents,
            idDependent
        ])

        // console.log(selectedDependents);

    }

    const handleSelectDays = (days) => {
        setSelectedDaysIds(days)
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

    const getTask = async () => {
        const result = await getTaskByIdService(idTask)
        setTask(result.data)
        setSelectedDaysIds(result.data.days)
        setAlarmHour(result.data.hour)
        setIdIcon(result.data.icon)
        setSelectedDependents(result.data.dependents)
        setIsLoading(false)
    }

    const getDaysOfWeek = async () => {
        const result = await getDaysService()
        setDaysOfWeek(result.data)
    }

    const handleForm = async (data) => {

        const newData = {
            ...data,
            alarmHour,
            selectedDays: selectedDaysIds,
            selectedDependents,
            idIcon
        };

        const result = await updateTaskService(newData)

        if (result.success) {
            close()
            return Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Tarefa atualizada com sucesso!'
            })
        }

        close()

    }

    const initialValues = {
        title: task.title
    }

    useEffect(() => {
        getDependents()
        getTask()
        getDaysOfWeek()
    }, []);

    return (

        <View style={style.container}>
            {isLoading ? (
                <Loading />
            ) : (
                <Formik
                    validationSchema={scheduleEditTaskDataSchema}
                    initialValues={initialValues}
                    onSubmit={values => handleForm(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <>

                            <View style={style.formContainer}>

                                <View style={style.headerContainer}>

                                    <TouchableOpacity onPress={close}>

                                        <MaterialIcons
                                            name="close"
                                            size={40}
                                        // style={modalGaleryTasks ? style.invisibleCloseModalIcon : style.closeModalIcon}

                                        />

                                    </TouchableOpacity>

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
                                        daysOfWeek.map(item => (

                                            <TouchableOpacity
                                                style={selectedDaysIds.includes(item.id) ? style.selectedDayButton : style.dayButton}
                                                onPress={() => manageDays(item.id)}
                                                key={item.id}
                                            >
                                                <Text style={style.dayText}>{item.initial}</Text>
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
                                                setIdIcon={setIdIcon}
                                                setGaleryTask={setGaleryTask}
                                                setImageTask={setImageTask}
                                                navigation={navigation}
                                            />
                                        </View>
                                    )
                                }

                                <View style={style.selectDependentsContainer}>

                                    <Text style={style.text}>SELECIONE A CRIANÇA</Text>

                                    <View style={style.dependentsContainer}>

                                        <ScrollView horizontal={true}>

                                            {
                                                dependents.map(item => (

                                                    <View
                                                        style={selectDependentHasError ? style.hasErrorDependentButton : style.dependentButton}
                                                        key={item.id}
                                                    >

                                                        <Dependent
                                                            name={item.name}
                                                            photo={item.photo}
                                                            selected={selectedDependents?.find(selectedDependent => selectedDependent === item.id)}
                                                            onPress={() => manageDependents(item.id)}
                                                        />

                                                    </View>
                                                ))
                                            }
                                        </ScrollView>

                                    </View>

                                </View>

                            </View>

                            <TouchableOpacity
                                style={modalGaleryTasks ? style.invisibleButtonContainer : style.buttonContainer}
                                onPress={handleSubmit}
                            >
                                <Text style={style.textButton}>SALVAR</Text>
                            </TouchableOpacity>

                        </>
                    )}
                </Formik>
            )}
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
        height: '100%',
        width: '100%',
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // bottom: 10,
        // backgroundColor: COLORS.beige
    },
    formContainer: {
        flex: 1,
        margin: 15,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.white
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingRight: 15,
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
        width: 150,
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
        // color: COLORS.gray
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
        width: 150,
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
        width: 220
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
        top: 390,
        left: 270,
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
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.blue,
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
        // backgroundColor: COLORS.red,
        alignSelf: 'stretch',
        marginTop: 10

    },
    invisibleCloseModalIcon: {
        position: 'absolute',
        top: 700,
        left: 280,
    },
    closeModalIcon: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.red,
    }
});

