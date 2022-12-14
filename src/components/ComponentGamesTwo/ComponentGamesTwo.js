import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../assets/const/colors';
import { ButtonImage } from '../../components/Button/ButtonImage';
import { TextGamesTwo } from '../../components/TextGamesTwo';
import { FONTS } from '../../assets/const';

export const ComponentGamesTwo = ({ firstStepImage, secondStepImage, firstStepText, correctStepFunction = () => { }, incorrectStepFunction = () => { }, firstStepCorrect }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonsContainer}>

                <ButtonImage
                    borderRadius={80}
                    widht={150}
                    height={149}
                    srcImage={firstStepImage}
                    // onPress={() => { correctStepFunction() }}
                    onPress={() => firstStepCorrect ? correctStepFunction() : incorrectStepFunction()}
                />
                <ButtonImage
                    borderRadius={80}
                    widht={150}
                    height={149}
                    srcImage={secondStepImage}
                    onPress={() => firstStepCorrect ? incorrectStepFunction() : correctStepFunction()}
                />
            </View>
            <TextGamesTwo
                labelText={firstStepText}
            />

            <Text style={styles.text}>

            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        width: '100%',
        height:'100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    buttonsContainer:{
        width:'100%',
        height: '50%',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text:{
        fontSize:40,
        color:COLORS.white,
        textAlign:'center',
        justifyContent:'center',
        textShadowColor:COLORS.grey,
        textShadowOffset:{widht:-1, height:1},
        textShadowRadius:1,
        elevation:10,
        fontFamily:FONTS.title,
        fontWeight:'bold',
    }
});