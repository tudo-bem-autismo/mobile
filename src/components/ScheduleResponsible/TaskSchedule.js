import React from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { COLORS } from "../../assets/const";

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
        // backgroundColor: COLORS.pink
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
        // backgroundColor: COLORS.purple

    },
    imageTask: {
        width: 55,
        height: 55,
        // backgroundColor: COLORS.white
    },
    textTask: {
        flex: 1,
        textAlign: 'center'
    }
});

