import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS, FONTS} from '../../assets/const';

import { getStepGames } from '../../services';

export const ButtonGamesTwo = ({backgroundColor, borderRadius, widht, height}) => {

    const [passo2, setPasso2] = useState('');
    const [cor, setCor] = useState('');

    const getPassos = async () =>{
        const result = await getStepGames()
        setPasso2(result.data.passo2)
        setCor(result.data.corBotao)
    }
    useEffect(() =>{
        getPassos()
    }, [])

    return(
        <View style = {styles.container}>
            <View style = {styles.containerButton}>
                <TouchableOpacity 
                style = {{...styles.buttonGames, backgroundColor: cor, borderRadius, widht, height}}
                >

                <Text style = {styles.text}>{passo2}</Text>

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
    containerButton:{
        display:'flex',
        alignItems: 'center',
        color:COLORS.pink
    },
    buttonGames:{
        width:150,
        height:60,
        //backgroundColor:COLORS.yellow,
        fontFamily:FONTS.title,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'170%',
        marginLeft:'90%',
        ...bottomShadow
    }, 
    text:{
       color:COLORS.white,
       fontFamily:FONTS.title,
       fontWeight:'bold',
       fontSize:20,
    }


})