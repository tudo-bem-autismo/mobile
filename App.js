import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Mandali_400Regular } from '@expo-google-fonts/mandali';

import React from "react";
import { Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Swiper from 'react-native-swiper'

import Toast from 'react-native-toast-message';

import { ResponsiveRegister } from './src/screens/ResponsibleRegister';
import { ResponsibleManagement } from './src/screens/ResponsibleManagement';
import { ResponsiblePassword } from './src/screens/ResponsibleManagement/responsiblePassword';
import Navigation from './src/navigation/navigation';
import { Loading } from './src/screens/Loading';
import { Menu } from './src/screens/Menu';
import { DependentListing } from './src/screens/DependentListing';
import { DependentRegister } from './src/screens/DependentRegister';
import { ResponsiveLogin } from './src/screens/Login';
import Navigation from './src/navigation/navigation';
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
        {/* <ResponsiveRegister /> */}
        {/* <ResponsibleManagement /> */}
        {/* <ResponsiblePassword/> */}
        <Navigation />
        {/* <Loading/> */}
        {/* <Menu /> */}
        {/* <DependentListing/> */}
        <Toast />
        {/* <ResponsiveRegister />
        <Toast /> */}
        {/* <Navigation/> */}
        {/* <KidsManagement/> */}
      </>
    );
  }

}
