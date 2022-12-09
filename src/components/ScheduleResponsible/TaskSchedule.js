import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const TaskSchedule = ({ image, title, onPress }) => {

    return (

        <View style={style.taskContainer}>

            <TouchableOpacity
                style={style.taskButton}
                onPress={() => onPress()}
            >

                <View style={style.imageTaskContainer}>
                    <Image
                        source={image}
                        style={style.imageTask}
                    />
                </View>

                <Text style={style.textTask}>{title}</Text>

            </TouchableOpacity>

        </View>

    );

}

const style = StyleSheet.create({
    taskContainer: {
        width: '25%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTaskContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    imageTask: {
        width: 55,
        height: 55,
    },
    textTask: {
        flex: 1,
        textAlign: 'center'
    }
});

