import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

export function DataInput({ date, setDate, hasError, value }) {

    const [show, setShow] = useState(false);

    const [text, setText] = useState(value);

    const handleDate = (event, selectedDate) => {

        const currentDate = selectedDate || date;

        const tempDate = new Date(currentDate);

        const finalDate = format(tempDate, 'dd/MM/yyyy');

        setShow(Platform.OS === 'ios');

        setText(finalDate);

        setDate(currentDate);

    }

    return (

        <View style={styles.mainContainer}>

            <View style={styles.inputContainer}>

                <Text style={styles.labelCalendar}> Data de Nascimento</Text>

                <View
                    style={hasError ? styles.errorCalendarContainer : styles.calendarContainer}
                >

                    <Text style={styles.text} values={text}>{text ? text : "00/00/0000"}</Text>

                    <TouchableOpacity
                        onPress={() => setShow(true)}
                        style={styles.button}
                    >
                        <FontAwesome style={styles.icon} name="calendar"></FontAwesome>
                    </TouchableOpacity>

                </View>

                {hasError && (
                    <Text style={styles.errorMessage}>insira um data de nascimento</Text>
                )}

                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode='date'
                        display='default'
                        maximumDate={new Date()}
                        onChange={handleDate} />
                )}
            </View>

        </View >

    );

}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 120,
        alignItems: 'center',
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
    },
    calendarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.blue,
        padding: 10,
        fontSize: 17,
    },
    errorCalendarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.red,
        padding: 10,
        fontSize: 17,
    },
    button: {
        position: 'absolute',
        right: 20,
        top: 13
    },
    icon: {
        fontWeight: 'bold',
        fontSize: 22,
        color: COLORS.gray,
    },
    labelCalendar: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
    },
    inputContainer: {
        width: '76%',
        height: '100%',
    },
    errorMessage: {
        color: COLORS.red,
        marginTop: 5
    }

});