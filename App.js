import React from 'react';
import { Mandali_400Regular } from '@expo-google-fonts/mandali';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

import Navigation from './src/navigation/navigation';
import { ScreenGames } from './src/screens/ScreenGames';
import { COLORS, FONTS } from './src/assets/const';
import { Games } from './src/screens/Games';
import { CongratulationsScreen } from './src/screens/CongratulationsScreen';
import { MedalScreen } from './src/screens/MedalScreen';
import { Reports } from './src/screens/Reports';
import { Loading } from './src/screens/Loading';
import { HomeDependent } from './src/screens/HomeDependent';
import { DependentProfile } from './src/screens/DependentProfile';
import { ResponsiveLogin } from './src/screens/Login';
import { MenuDependent } from './src/screens/MenuDependent';
import { GamesDependent } from './src/screens/GamesDependent';
import { DependentListing } from './src/screens/DependentListing';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Outfit_400Regular,
    Mandali_400Regular
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  } else {
    return (

      <>
      {/* <ScreenGames/> */}
      <Navigation/>
      {/* <MedalScreen/> */}
      {/* <GamesDependent /> */}
      {/* <GamesDependent/> */}
      {/* <Toast /> */}
      </>
    );
  }

}
