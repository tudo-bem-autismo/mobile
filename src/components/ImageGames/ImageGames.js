import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {COLORS, FONTS} from '../../assets/const';
import feelingAnger from '../../assets/images/feelings.png';
import {getStepGames} from '../../services/stepGames';


export const ImageGames = ({srcImageGames}) =>{

    // const [image, setImage] = useState(null);

    // const getImage = async () =>{
    //     const result = await getStepGames()
    //     //console.log(result.data.image)
    //     setImage(result.data.image)
    // }
    // useEffect(() =>{
    //     getImage()
    // }, [])

    return(
        <View style = {styles.imageContainer}>
            <Image style = {styles.image}
            source ={{uri: srcImageGames}}
            reziseMode='stretch'
            />
        </View>

    );

  
}

const styles = StyleSheet.create({

    imageContainer: {
        width:200,
        height:210,
        marginBottom:'180%',
    },
    image: {
        width:200,
        height:10,
        display: 'flex',
        flex:1,
        borderRadius:100,
        
        
        
    },
});