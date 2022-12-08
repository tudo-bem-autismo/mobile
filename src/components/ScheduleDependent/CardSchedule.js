import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

import done from "../../assets/icons/done.png";
import block from "../../assets/icons/block.png";

export const CardScheduleDependent = ({ title, hour, image, selected, onPress, isToday }) => {

    return (

        <View style={style.container}>


            <View style={style.card}>

                <View style={style.infoTaskContainer}>

                    <Image
                        source={{ uri: image }}
                        style={style.imageInfoTask}
                    />

                    <View style={style.textInfoTaskContainer}>
                        <Text style={style.textTitleInfoTask}>{title}</Text>
                        <Text style={style.textHourInfoTask}>{hour}</Text>
                    </View>

                </View>

                <View style={style.buttonsContainer}>

                    <TouchableOpacity
                        onPress={() => onPress()}
                        style={!isToday || selected ? style.doneButton : style.button}
                    // disabled={!isToday || selected}
                    >

                        {
                            selected && (
                                <Image
                                    source={done}
                                    style={style.imageDoneButton}
                                />
                            )

                        }

                    </TouchableOpacity>

                </View>

            </View>

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
        width: '100%',
        height: 110,
        // backgroundColor: COLORS.black,
    },
    card: {
        width: '92%',
        height: 80,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 20,
        ...bottomShadow
    },
    infoTaskContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        // backgroundColor: COLORS.red,
    },
    imageInfoTask: {
        width: '17%',
        height: '65%'
    },
    textInfoTaskContainer: {
        flex: 2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingLeft: 10,
        // backgroundColor: COLORS.red,
    },
    textTitleInfoTask: {
        fontFamily: FONTS.text,
        fontSize: 20
    },
    textHourInfoTask: {
        fontFamily: FONTS.text,
        fontSize: 15
    },
    buttonsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        top: 60,
        right: 30,
        // backgroundColor: COLORS.pink
    },
    button: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        margin: 5,
        backgroundColor: COLORS.white,

    },
    doneButton: {
        width: 30,
        height: 30,
        // backgroundColor: COLORS.pink,
    },
    blockedButton: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        margin: 5,
    },
    imageBlockedButton: {
        width: '115%',
        height: '115%',
        bottom: 2,
        right: 2,
    },
    imageExcludeButton: {
        width: '80%',
        height: '80%',
        top: 2,
        left: 2,
    },
    imageManageButton: {
        width: '80%',
        height: '80%',
        top: 2,
        left: 5,
    },
    imageDoneButton: {
        width: '115%',
        height: '115%',
        bottom: 2,
        right: 2,
    },
    checkbox: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.white
    },
    checkedCheckBox: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 8,
        borderColor: '#15dbc4',
        borderRadius: 50,
        // backgroundColor: COLORS.blue
    }
});
