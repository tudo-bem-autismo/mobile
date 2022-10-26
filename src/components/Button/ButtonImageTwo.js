import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONT} from '../../assets/const';

import { getStepGames } from '../../services';

export const ButtonImageTwo = ({source, borderRadius, widht, height, srcImage}) =>{

    // const [image2, setImage2] = useState(null);

    // const getImages = async () =>{
    //     const result = await getStepGames()
    //     //setImage2(result.dataTwo.imagemDois)
    // }
    // useEffect(() =>{
    //     getImages()
    // }, [])

    return(
        <View style = {styles.container}>
             <View style = {styles.containerImage}>
                <TouchableOpacity 
                style = {{...styles.buttonImage, borderRadius, widht, height}}
                >
                 <Image
                    style = {styles.image}
                    source={{uri: srcImage}}
                />
                </TouchableOpacity>
            </View>
        </View>
    );

}
const imageShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        width: 70,
        height: 10,
        alignItems:'center',
    
    },
    containerImage:{
        display:'flex',
        alignItems:'center',
        marginLeft:'170%',
        marginBottom:'425%'
    },
    buttonImage:{
        width:150,
        height:149,
        backgroundColor:COLORS.yellow,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'10%',
        ...imageShadow
    },
    image:{
        width:150,
        height:149,
        borderRadius:80
    }


})