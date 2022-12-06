import React from 'react';
import { Mandali_400Regular } from '@expo-google-fonts/mandali';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

import Navigation from './src/navigation/navigation';
import { ScreenGames } from './src/screens/ScreenGames';

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
        <Navigation />
        <Toast />
      </>
    );
  }

}
