import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text } from "react-native";
import DatePicker from 'react-native-modern-datepicker';

import modalBackground from '../../assets/images/modalBackground.png';
import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";
import { Formik } from "formik";
import { Input, MaskedInput } from "../Input";
import { Picker } from "@react-native-picker/picker";
import { getResponsibleDependentsService } from "../../services";
import { Dependent } from "../DependentListing/Dependent";


const { height } = Dimensions.get('window')

export const ModalCreateSchedule = ({ close, show }) => {

    const [time, setTime] = useState('');

    const [date, setDate] = useState('');

    const [selectedKid, setSelectedKid] = useState();

    const [kidName, setKidName] = useState([]);

    const [dependents, setDependents] = useState([]);

    const getKid = async () => {
        const result = await getResponsibleDependentsService();
        setKidName(result.data);

    };

    const getDependents = async () => {
        const result = await getResponsibleDependentsService()
        setDependents(result.data)

    }

    useEffect(() => {
        getKid();
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
                        // validationSchema={responsibleUpdateSchema}
                        // initialValues={initialValues}
                        onSubmit={values => handleForm(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <>

                                <View style={style.formContainer}>

                                    <Input
                                        title="TITULO"
                                        iconName="user-circle-o"
                                        placeholder="Descreva a tarefa a ser criada"
                                        borderColor={COLORS.blue}
                                        backgroundColor={COLORS.white}
                                    />

                                    <View style={style.dateTimeContainer}>

                                        <Text style={style.text}>DIA E HORA</Text>

                                        <View style={style.timeContainer}>

                                            <Picker
                                                style={style.picker}
                                                selectedValue={selectedKid}
                                                onValueChange={(itemValue) => setSelectedKid(itemValue)}
                                            >
                                                {kidName.map((kid) => (
                                                    <Picker.Item
                                                        label={kid.name}
                                                        value={kid.id}
                                                        key={kid.id}
                                                        style={style.item}

                                                    />
                                                ))}
                                            </Picker>

                                            <View style={style.periodDate}>

                                                <Picker
                                                    style={style.picker}
                                                    selectedValue={selectedKid}
                                                    dropdownIconColor={COLORS.blue}
                                                    dropdownIconRippleColor={COLORS.purple}

                                                    onValueChange={(itemValue) => setSelectedKid(itemValue)}
                                                >
                                                    <Picker.Item
                                                        label="Repetir"
                                                        value="Repetir"
                                                        style={style.item}
                                                    />
                                                    <Picker.Item
                                                        label="Todos os dias"
                                                        value="Todos os dias"
                                                        style={style.item}
                                                    />
                                                    <Picker.Item
                                                        label="Seg a sex"
                                                        value="Seg a sex"
                                                        style={style.item}

                                                    />
                                                </Picker>

                                            </View>

                                        </View>

                                        <Input
                                            placeholder="  SEG  TER  QUAR  QUI  SEX  SAB  DOM"
                                            borderColor={COLORS.blue}
                                            backgroundColor={COLORS.white}
                                        />

                                        <Input
                                            placeholder="Icone da tarefa"
                                            borderColor={COLORS.blue}
                                            backgroundColor={COLORS.white}
                                        />



                                        {/* <View >
                                            <DatePicker
                                                mode="time"
                                                minuteInterval={3}
                                                onTimeChange={selectedTime => setTime(selectedTime)}

                                            />
                                        </View> */}

                                    </View>

                                    <Text style={style.text}>SELECIONE A CRIANÇA</Text>

                                    <View style={style.dependentsContainer}>

                                        {
                                            dependents.map(item => (
                                                <Dependent
                                                    name={item.name}
                                                    photo={{ uri: item.photo }}
                                                    key={item.id}
                                                    onPress={() => {
                                                    }}
                                                />
                                            ))
                                        }

                                    </View>

                                </View>
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
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        // alignItems: 'center',
        // backgroundColor: COLORS.white
    },
    text: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        marginLeft: 20,
    },
    dateTimeContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 10,
        // backgroundColor: COLORS.red
    },
    timeContainer: {
        flexDirection: 'row'
    },
    item: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
    },
    picker: {
        width: 180,
        height: 10,
    },
    periodDate: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.blue,
        backgroundColor: COLORS.white
    },
    dependentsContainer: {
        flexDirection: 'row',
        marginLeft: 20,
    }
    // hour: {
    //     width: 180,
    //     height: 100,
    //     backgroundColor: COLORS.red,

    // }

});

