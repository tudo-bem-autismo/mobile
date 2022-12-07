import React, { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

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
import { getTasksService, taskIsDoneService } from "../../services/task";
import { getTodayInitials } from "../../utils/date/days";
import notFoundTask from '../../assets/images/notFoundTask.gif';


export const ScheduleDependent = ({ close, show, navigation }) => {

    const [showDoneTaskModal, setShowDoneTaskModal] = useState(false);

    const [dependent, setDependent] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [checkedTasks, setCheckedTasks] = useState([]);

    const [selectedDay, setSelectedDay] = useState(getTodayInitials());

    const [dailyTasks, setDailyTasks] = useState([]);

    const [tasks, setTasks] = useState([]);

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

        const doneTaskExist = dailyTasks?.find(doneTaskId => doneTaskId === idTask)

        if (doneTaskExist?.isDone)
            return

        const idDependent = await getData('@idDependent')

        const data = {
            idTask,
            idDependent
        }

        setShowDoneTaskModal(true)

        const result = await taskIsDoneService(data)

        if (result.success) {
            return Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Tarefa criada com sucesso!'
            })
        }

        await getTasks()

    }

    const getDependent = async () => {

        const idDependent = await getData('@idDependent')

        const result = await getKidService(idDependent)

        setDependent(result.data)

    }

    const getTasks = async () => {

        const idDependent = await getData('@idDependent')

        const result = await getTasksService(idDependent);

        const initialDailyTasks = result.data.filter((item) => item.day === selectedDay);

        const initialCheckedTasks = result.data
            .filter(item => item.isDone)
            .map(item => item.idTask);

        setTasks(result.data);
        setDailyTasks(initialDailyTasks);
        setCheckedTasks(initialCheckedTasks)
    }

    const handleDailyTasks = (day) => {
        const newDailyTasks = tasks.filter((item) => item.day === day);

        setDailyTasks(newDailyTasks);
        setSelectedDay(day);
    }

    useEffect(() => {
        getDependent()
        getTasks()
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
                                        photo={dependent.photo}
                                    />

                                </View>

                            </View>

                            <View style={style.listingContainer}>

                                <View style={style.daysContainer}>

                                    {
                                        DAYS_OFF_WEEK.map(item => (

                                            <TouchableOpacity
                                                style={selectedDay.includes(item) ? style.selectedDayButton : style.dayButton}
                                                onPress={() => handleDailyTasks(item)}
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
                                            dailyTasks.length ? (

                                                dailyTasks?.map(item => (
                                                    <CardScheduleDependent
                                                        image={item.icon}
                                                        title={item.title}
                                                        hour={item.hour}
                                                        key={item.idTask}
                                                        isToday={selectedDay === getTodayInitials()}
                                                        selected={item.isDone}
                                                        onPress={() => manageDoneTask(item.idTask)}
                                                    />
                                                ))
                                            ) : (
                                                <View style={style.notFoundCard}>
                                                    <Text style={style.textNotFoundCard}>Nenhuma tarefa no momento</Text>
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
                    </ImageBackground>

                </>
            )}

        </View>


    );

}

