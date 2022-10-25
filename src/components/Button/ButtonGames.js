import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, onclick} from 'react-native';

import {COLORS, FONTS} from '../../assets/const';

import { getStepGames } from '../../services';

export const ButtonGames = ({backgroundColor, borderRadius, widht, height, labelButton, color}) => {

    const [passo1, setPasso1] = useState('');
    const [passo2, setPasso2] = useState('');
    const [cor, setCor] = useState('');

    const getPassos = async () =>{
        const result = await getStepGames()
        setPasso1(result.data.passo1)
        setPasso2(result.data.passo2)
        setCor(result.data.corBotao)
    }
    useEffect(() =>{
        getPassos()
    }, [])


    return(
        

        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {{...styles.buttonGames, backgroundColor: color , borderRadius, widht, height}}
                >

                <Text style = {styles.text}>{labelButton}</Text>

                </TouchableOpacity>
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

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        width: 200,
        height: 100,
    },
    buttonContainer:{
        display:'flex',
        alignItems: 'center',

    },
    buttonGames:{
        width:150,
        height:60,
        fontFamily:FONTS.title,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'450%',
        marginRight:'90%',
        ...bottomShadow
    }, 
    text:{
       color:COLORS.white,
       fontFamily:FONTS.title,
       fontWeight:'bold',
       fontSize:20,
    }


})