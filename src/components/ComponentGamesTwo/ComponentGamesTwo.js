import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../../assets/const/colors';
import { ButtonImage } from '../../components/Button/ButtonImage';
import { ButtonImageTwo } from '../Button/ButtonImageTwo';
import { TextGamesTwo } from '../../components/TextGamesTwo';

export const ComponentGamesTwo = ({firstStepImage, secondStepImage, firstStepText}) =>{

    return(
        <View style = {styles.mainContainer}>
            <ButtonImage
                borderRadius={80}
                widht={150}
                height={149}
                srcImage={firstStepImage}         
            />
            <ButtonImageTwo
                borderRadius={80}
                widht={150}
                height={149}  
                srcImage={secondStepImage}          
            />
            <TextGamesTwo
                labelText={firstStepText}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
        // backgroundColor:COLORS.purpleContainer,
    },

});