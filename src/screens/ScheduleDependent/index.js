import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Loading } from "../../screens/Loading";
import style from "../../screens/ScheduleDependent/style";

import brushingTeeth from '../../assets/images/brushingTeeth.png';
import backgroundSchedule from '../../assets/images/backgroundScheduleDependent.png';
import { CardSchedule } from "../../components/ScheduleResponsible/CardSchedule";
import { ModalCongratulationsTask } from "../../components/Modal/ModalCongratulationsTask";
import { MainHeaderDependent } from "../../components/Header/MainHeaderDependent";
import { Dependent } from "../../components";
import { getKidService } from "../../services";
import { getData } from "../../utils/storage";
import { CardScheduleDependent } from "../../components/ScheduleDependent/CardSchedule";

export const ScheduleDependent = ({ close, show, navigation, idDependent }) => {

    const [showDoneTaskModal, setShowDoneTaskModal] = useState(false);

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

    const manageDoneTask = async (idTask) => {

        const doneTaskExist = checkedTasks?.find(doneTaskId => doneTaskId === idTask)

        if (doneTaskExist) {
            const filteredTask = checkedTasks.filter(item => item !== idTask)
            return setCheckedTasks(filteredTask)
        }

        setShowDoneTaskModal(true)

        const managedTasks = [
            ...checkedTasks,
            idTask
        ]

        setCheckedTasks(managedTasks)

    }

    const getDependent = async () => {

        const idDependent = await getData('@idDependent')

        const result = await getKidService(idDependent)

        setDependent(result.data)

    }

    useEffect(() => {
        getDependent()
        setIsLoading(false)

    }, [])

    return (

        <View style={style.container}>

            {isLoading ? (
                <Loading />
            ) : (
                <>

                    <MainHeaderDependent
                        screenName="ROTINA"
                        navigation={navigation}
                    />

                    <ImageBackground
                        source={backgroundSchedule}
                        style={style.backgroundContainer}
                    >


                        <View style={style.listingScheduleContainer}>


                            {
                                showDoneTaskModal && (
                                    <ModalCongratulationsTask
                                        close={() => setShowDoneTaskModal(false)}
                                    />
                                )

                            }

                            <View style={style.headerContainer}>

                                <View style={style.dependentContainer}>

                                    <Dependent
                                        name={dependent.name}
                                        photo={{ uri: dependent.photo }}
                                    />

                                </View>

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

                                        {
                                            isTask.map(item => (
                                                <CardScheduleDependent
                                                    image={item.image}
                                                    title={item.title}
                                                    hour={item.hour}
                                                    key={item.id}
                                                    onPress={() => manageDoneTask(item.id)}
                                                />
                                            ))
                                        }


                                        <View style={style.cardInvisible}></View>

                                    </ScrollView>

                                </View>

                            </View>

                        </View>
                    </ImageBackground>

                </>
            )}

        </View>


    );

}

