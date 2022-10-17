import { Mandali_400Regular } from '@expo-google-fonts/mandali';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';

import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

import Navigation from './src/navigation/navigation';
import { HomeResponsible } from './src/screens/HomeResponsible';
import { SalutationScreen } from './src/screens/SalutationScreen';
import { LittleGames} from './src/screens/LittleGames';
import { LittleGamesTwo } from './src/screens/LittleGamesTwo';
import { Onboarding } from './src/screens/Onboarding';
import { ScreenGames } from './src/screens/ScreenGames';
import { ScreenGamesTwo } from './src/screens/ScreenGamesTwo';

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
         <ScreenGames/>
        {/* <Toast /> */}
      </>
    );
  }

}
