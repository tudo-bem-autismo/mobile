import React, { useEffect, useState } from "react";
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../assets/const";
import { Loading } from "../../screens/Loading";
import { getKidService } from "../../services";
import { Button } from "../Button";
import { Dependent } from "../DependentListing/Dependent";

import notFoundTask from '../../assets/images/notFoundTask.gif';
import { deleteTaskService, getTasksService, taskIsDoneService } from "../../services/task";
import { DAYS_OFF_WEEK, getTodayInitials } from '../../utils/date/days';
import { CardSchedule } from "../ScheduleResponsible/CardSchedule";
import { ModalCongratulationsTask } from "./ModalCongratulationsTask";
import { ModalEditTask } from "./ModalEditTask";
import { ModalExludeTask } from "./ModalExcludeTask";
import { ModalHistoryTasks } from "./ModalHistoryTasks";


const { height } = Dimensions.get('window')

export const ModalListingSchedule = ({ close, show, navigation, idDependent }) => {

    const [showDoneTaskModal, setShowDoneTaskModal] = useState(false);

    const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

    const [showEditTaskModal, setShowEditTaskModal] = useState(false);

    const [showHistoryTaskModal, setShowHistoryTaskModal] = useState(false);

    const [dependent, setDependent] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [selectedDay, setSelectedDay] = useState(getTodayInitials());

    const [selectedTaskId, setSelectedTaskId] = useState(0);

    const [dailyTasks, setDailyTasks] = useState([]);

    const [tasks, setTasks] = useState([]);

    const [checkedTasks, setCheckedTasks] = useState([]);


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

        const data = {
            idTask: idTask,
            idDependent: idDependent
        }

        const result = await taskIsDoneService(data)

        if (result.success) {
            return Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Tarefa criada com sucesso!'
            })
        }

    }

    const handleDeleteTask = () => {
        setShowDeleteTaskModal(true)
    }

    const deleteTask = async (idTask) => {
        const result = await deleteTaskService(idTask);

        if (result.success) {
            return Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Tarefa excluida com sucesso!'
            })
        }
    }

    const handleEditTask = (idTask) => {
        setShowEditTaskModal(true)
    }

    const getDependent = async () => {
        const result = await getKidService(idDependent);
        setDependent(result.data);
    };

    const getTasks = async () => {
        const result = await getTasksService(idDependent);
        setTasks(result.data);

        const initialDailyTasks = result.data.filter((item) => item.day === selectedDay);
        setDailyTasks(initialDailyTasks);
    }

    const handleDailyTasks = (day) => {
        const newDailyTasks = tasks.filter((item) => item.day === day);

        setDailyTasks(newDailyTasks);
        setSelectedDay(day);
    }

    useEffect(() => {
        getDependent();
        getTasks()
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

                            {
                                showDoneTaskModal && (
                                    <ModalCongratulationsTask
                                        close={() => setShowDoneTaskModal(false)}
                                    />
                                )

                            }

                            {
                                showDeleteTaskModal && (
                                    <ModalExludeTask
                                        close={() => setShowDeleteTaskModal(false)}
                                        del={() => deleteTask()}
                                    />
                                )
                            }

                            {
                                showEditTaskModal && (
                                    <ModalEditTask
                                        taskId={selectedTaskId}
                                        close={() => setShowEditTaskModal(false)}
                                    />
                                )

                            }

                            {
                                showHistoryTaskModal && (
                                    <ModalHistoryTasks
                                        close={() => setShowHistoryTaskModal(false)}
                                        idDependent={idDependent}
                                    />
                                )
                            }

                            {
                                !showHistoryTaskModal && !showEditTaskModal && (
                                    <>
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
                                                onPress={() => setShowHistoryTaskModal(true)}
                                            />

                                        </View>

                                        <View style={style.listingContainer}>

                                            <View style={style.daysContainer}>

                                                {
                                                    DAYS_OFF_WEEK.map(item => (

                                                        <TouchableOpacity
                                                            style={selectedDay === item ? style.selectedDayButton : style.dayButton}
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
                                                                <CardSchedule
                                                                    image={item.icon}
                                                                    title={item.title}
                                                                    hour={item.hour}
                                                                    key={item.id}
                                                                    selected={checkedTasks?.includes(item.idTask)}
                                                                    deleteTask={() => handleDeleteTask(item.id)}
                                                                    editTask={() => handleEditTask(item.id)}
                                                                    onPress={() => manageDoneTask(item.idTask)}
                                                                />
                                                            ))

                                                        ) : (
                                                            <View style={style.notFoundCard}>
                                                                <Text style={style.textNotFoundCard}>Nenhuma tarefa criada no momento</Text>
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


                                    </>
                                )
                            }

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

