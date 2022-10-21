import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../assets/const/colors';
import { ImageGames } from '../../components/ImageGames';
import { TextGames } from '../../components/TextGames';
import { ButtonGames } from '../../components/Button/ButtonGames';
import { ButtonGamesTwo } from '../Button/ButtonGamesTwo';

export const ComponentGames = ({ firstStepImageGames, firstStepButton, firstStepButtonTwo, fisrtStepColor }) => {
  return (

    <View style={styles.mainContainer}>
      <ImageGames
        srcImageGames={firstStepImageGames}
      />
      <TextGames />
      <ButtonGames
        backgroundColor={COLORS.orange}
        borderRadius={30}
        width={150}
        height={60}
        labelButton={firstStepButton}
        color={fisrtStepColor}

      />
      <ButtonGamesTwo
        backgroundColor={COLORS.orange}
        borderRadius={30}
        width={150}
        height={60}
        labelButton={firstStepButtonTwo}
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

});