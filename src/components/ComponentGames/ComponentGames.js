import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { COLORS } from '../../assets/const/colors';
import { ImageGames } from '../../components/ImageGames';
import { TextGames } from '../../components/TextGames';
import { ButtonGames } from '../../components/Button/ButtonGames';
import { ButtonGamesTwo } from '../Button/ButtonGamesTwo';

export const ComponentGames = ({ firstStepImageGames, secondStepText, firstStepButton, firstStepButtonTwo, firstStepColor, onPress =()=>{} }) => {
  return (



    <View style={styles.mainContainer}>
      <ImageGames
        srcImageGames={firstStepImageGames}
      />
      <View style={styles.textContainer}>
        <TextGames
          labelSecondText={secondStepText} />
      </View>
      <ButtonGames
        backgroundColor={COLORS.orange}
        borderRadius={30}
        width={150}
        height={60}
        labelButton={firstStepButton}
        color={firstStepColor}
        
      />
      <ButtonGamesTwo
        backgroundColor={COLORS.orange}
        borderRadius={30}
        width={150}
        height={60}
        labelButton={firstStepButtonTwo}
        color={firstStepColor}
      />

     
    </View>

  );

}

const styles = StyleSheet.create({
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
    position: 'absolute',
    marginBottom:'70%',
  }

});