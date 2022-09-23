import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import { Outfit_400Regular } from '@expo-google-fonts/outfit'
import { Mandali_400Regular } from '@expo-google-fonts/mandali'

import React from "react";
import { Text } from 'react-native';

import Toast from 'react-native-toast-message';

import { ResponsiveRegister } from './src/screens/ResponsibleRegister';

import { DependentRegister } from './src/screens/DependentRegister';

import { ResponsiveLogin } from './src/screens/Login';
import Navigation from './src/navigation/navigation';

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
      // <Navigation/>
      //<>
      //<Navigation/>
      //</>
      <>
        <DependentRegister />
        <Toast />
      </>
    );
  }

}
