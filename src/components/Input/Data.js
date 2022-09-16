import React, {useState} from "react";
import { Text, StyleSheet, View, Button, Platform } from "react-native";
import {COLORS } from "../../assets/const";
import DateTimePicker from "@react-native-community/datetimepicker";


export function DataInput() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);

        console.log(fDate);
    }
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (

        <View style={styles.mainContainer}>

            <Text style={styles.text}>{text}</Text>
            <Button title="data de nascimento" onPress={() => showMode('date')}/> 
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    display='default'
                    onChange={onChange}/>
            )}

        </View >

    );

}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '15%',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    
});