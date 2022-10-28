import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { COLORS } from '../../assets/const/colors';
import { ImageGames } from '../../components/ImageGames';
import { TextGames } from '../../components/TextGames';
import { ButtonGames } from '../../components/Button/ButtonGames';
import { ButtonGamesTwo } from '../Button/ButtonGamesTwo';

export const ComponentGames = ({ firstStepImageGames, secondStepText, firstStepButton, firstStepButtonTwo, firstStepColor, correctStepFunction =()=>{}, incorrectStepFunction =()=>{}, firstStepCorrect }) => {

  return (
    <View style={styles.mainContainer}>
      <ImageGames
        srcImageGames={firstStepImageGames}
      />
      <View style={styles.textContainer}>
        <TextGames
          labelSecondText={secondStepText} />
      </View>
      <View style={styles.container}>
        <ButtonGames
          backgroundColor={COLORS.orange}
          borderRadius={30}
          width={150}
          height={60}
          labelButton={firstStepButton}
          color={firstStepColor}
          // onPress={() => { correctStepFunction()}}
          onPress={()=>firstStepCorrect ? correctStepFunction() : incorrectStepFunction()}


        />
        
        <ButtonGamesTwo
          backgroundColor={COLORS.orange}
          borderRadius={30}
          width={150}
          height={60}
          labelButton={firstStepButtonTwo}
          color={firstStepColor}
          // onPress={() => { incorrectStepFunction()}}
          onPress={()=>firstStepCorrect ? incorrectStepFunction() : correctStepFunction()}  
        />
      </View>


    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 500,
    left: 0,
    width: 400,
    height: 150,
    zIndex: 10,
    backgroundColor: COLORS.red,
  },
  mainContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: StatusBar.currentHeight,
    // backgroundColor:COLORS.yellowContainer,
  },
  textContainer: {
    flex: 1,
    // backgroundColor: COLORS.red,
    // height:70,
    position: 'absolute',
    // top:-30,
  }

});