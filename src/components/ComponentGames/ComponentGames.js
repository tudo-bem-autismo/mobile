import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../../assets/const/colors';
import { ImageGames } from '../../components/ImageGames';
import { TextGames } from '../../components/TextGames';
import { ButtonGames } from '../../components/Button/ButtonGames';

export const ComponentGames = () =>{
    return(
       
      <View style = {styles.mainContainer}>
          <ImageGames/>
          <TextGames/>
          <ButtonGames
            backgroundColor={COLORS.orange}
            borderRadius={30}
            width={150}
            height={60}
          />
      </View>
        
    );

}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
        backgroundColor:COLORS.yellowContainer,
    },

});