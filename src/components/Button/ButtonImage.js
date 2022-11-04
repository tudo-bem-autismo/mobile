import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONT} from '../../assets/const';

import { getStepGames } from '../../services';

export const ButtonImage = ({source, borderRadius, widht, height, srcImage, onPress = () => { }}) =>{
    
    // const [image1, setImage] = useState(null);

    // const getImages = async () =>{
    //     const result = await getStepGames()
    //     setImage(result.dataTwo.imagem)
    // }
    // useEffect(() =>{
    //     getImages()
    // }, [])
    
    return(

        <View style = {styles.container}>
              <View style = {styles.imageContainer}>
                <TouchableOpacity 
                style = {{...styles.buttonImage, borderRadius, widht, height}}
                onPress={onPress}
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
        flex:1,
        flexDirection: 'row',
        width: 150,
        height: 149,
        alignItems:'center',
        marginRight:'45%',
        marginBottom:'1%',
    },
    imageContainer:{
        display:'flex',
        alignItems:'center',
    
    },
    buttonImage:{
        width:150,
        height:149,
        backgroundColor:COLORS.yellow,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'100%',
        ...imageShadow
    },
    image:{
        width:150,
        height:149,
        borderRadius:80
    }


})