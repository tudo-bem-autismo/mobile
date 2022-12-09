import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ButtonImage } from '../../components/Button/ButtonImage';
import { TextGamesTwo } from '../../components/TextGamesTwo';
import { ButtonImageTwo } from '../Button/ButtonImageTwo';

export const ComponentGamesTwo = ({ firstStepImage, secondStepImage, firstStepText, correctStepFunction = () => { }, incorrectStepFunction = () => { }, firstStepCorrect }) => {
    return (
        <View style={styles.mainContainer}>
            <ButtonImage
                borderRadius={80}
                widht={150}
                height={149}
                srcImage={firstStepImage}
                onPress={() => firstStepCorrect ? correctStepFunction() : incorrectStepFunction()}
            />
            <ButtonImageTwo
                borderRadius={80}
                widht={150}
                height={149}
                srcImage={secondStepImage}
                onPress={() => firstStepCorrect ? incorrectStepFunction() : correctStepFunction()}
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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
    },

});