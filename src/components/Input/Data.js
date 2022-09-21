import React, {useState} from "react";
import { Text, StyleSheet, View, Button, Platform, TouchableOpacity } from "react-native";
import {COLORS, FONTS } from "../../assets/const";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";


export function DataInput({
    values,}) {



    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('00/00/0000');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);
        // console.log(fDate)
        // values = fDate
        console.log(setText);
    }
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (

        <View style={styles.mainContainer}>
            
            
            <Text style={styles.labelCalendar}> Data de Nascimento</Text>
           
            <View style={styles.containerCalendar}>
                <Text style={styles.text} 
                    values={text}>{text}</Text>
                <TouchableOpacity onPress={() => showMode('date')}>
                    <FontAwesome style={styles.button} name="calendar"></FontAwesome>
                </TouchableOpacity>
            </View>
            
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    display='spinner'
                    onChange={onChange}/>
            )}

        </View >

    );

}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '20%',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        marginRight: '58%'
    },
    containerCalendar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.blue,
        padding: 10,
        fontSize: 17,

    },
    button: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.gray,
    },
    labelCalendar: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        marginLeft: '-25%',
    }
    
});