import { BlurView } from 'expo-blur';
import React, { useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../assets/const";
import { Loading } from "../../screens/Loading";
import { TaskSchedule } from '../ScheduleResponsible/TaskSchedule';

import { getIconsTasksService } from '../../services/task';

const { height } = Dimensions.get('window')

export const ModalGaleryTasks = ({ close, show, setIdIcon, setImageTask, navigation }) => {

    const [isLoading, setIsLoading] = useState(true);

    const [tasks, setTasks] = useState([{}]);

    const getTasks = async () => {
        const result = await getIconsTasksService()
        setTasks(result.data)
    }

    useEffect(() => {
        getTasks()
    }, []);

    const selectedTask = (idTask) => {
        setIdIcon(idTask)
        close()
    }

    useEffect(() => {
        setIsLoading(false)

    }, [])

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
        <View style={style.mainContainer}>
            {isLoading ? (
                <Loading />
            ) : (

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

                        <BlurView
                            intensity={30}
                            tint='light'
                            style={style.blurContainer}
                        >
                            <View style={style.galeryContainer}>

                                <View style={style.headerContainer}>

                                    <Text style={style.textTitle}>Icone da tarefa</Text>

                                    <MaterialIcons
                                        name="close"
                                        size={30}
                                        style={style.closeModalIcon}
                                        onPress={close}
                                    />

                                </View>


                                <View style={style.tasksContainer}>

                                    {
                                        tasks.map(item => (
                                            <TaskSchedule
                                                key={item.id}
                                                image={{ uri: item.icon }}
                                                title={item.title}
                                                onPress={() =>
                                                    selectedTask(item.id)}
                                            />
                                        ))
                                    }

                                </View>


                            </View>


                        </BlurView>

                    </Animated.View>
                </Animated.View >
            )}
        </View>
    );

}

const style = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 340,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        height: '100%',
        width: '100%',
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    galeryContainer: {
        width: '100%',
        height: '82%',
        top: 18,
        backgroundColor: COLORS.white,
        borderColor: COLORS.purple,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#6000FF',
        shadowRadius: 1,
        elevation: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    textTitle: {
        fontSize: 25,
        fontFamily: FONTS.mandali,
        paddingLeft: 70
    },
    selectTasksContainer: {
        flex: 3,
    },
    tasksContainer: {
        flex: 3,
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
