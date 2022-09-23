import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Mandali_400Regular } from '@expo-google-fonts/mandali';

import React from "react";
import { Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Swiper from 'react-native-swiper'

import { ResponsiveRegister } from './src/screens/ResponsibleRegister';
import { ResponsibleManagement } from './src/screens/ResponsibleManagement';
import { Onboarding } from './src/screens/Onboarding';
import { OnboardingGames } from './src/screens/OnboardingGames';
import { OnboardingRoutines } from './src/screens/OnboardingRoutines';
import { HomeScreen } from './src/screens/HomeScreen';
import { KidsManagement } from './src/screens/KidsManagement';
import { SalutationScreen } from './src/screens/SalutationScreen';
import Navigation from './src/navigation/navigation';
import Swipper from './src/swiper/swiper';
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
        {/* <ResponsiveRegister />
        <Toast /> */}
        {/* <Navigation/> */}
        <KidsManagement/>
       
        
        
      </>
    );
  }

}
