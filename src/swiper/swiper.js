import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'

import { Onboarding } from '../screens/Onboarding';
import styles from '../screens/Onboarding/style';
import { OnboardingGames } from '../screens/OnboardingGames';
import { OnboardingRoutines } from '../screens/OnboardingRoutines';

export default () => (
    <Swiper>
  
      <View style={stylesSwiper.mainContainer} >
        <Onboarding/>
      </View>
      <View style = {stylesSwiper.mainContainer}>
        <OnboardingGames/>
      </View>
      <View style={stylesSwiper.mainContainer} >
        <OnboardingRoutines/>
      </View>
      
     </Swiper>
   )

const stylesSwiper = StyleSheet.create({
       mainContainer: {
        width: '100%',
        height: '100%',

      }
  });