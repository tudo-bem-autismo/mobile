import { Mandali_400Regular } from '@expo-google-fonts/mandali';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { View, Text, StyleSheet, TouchableOpacity, onclick } from 'react-native';


// import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

import Navigation from './src/navigation/navigation';
import { DependentRegister } from './src/screens/DependentRegister';
import { HomeResponsible } from './src/screens/HomeResponsible';
import { SalutationScreen } from './src/screens/SalutationScreen';
import { LittleGames } from './src/screens/LittleGames';
import { LittleGamesTwo } from './src/screens/LittleGamesTwo';
import { Onboarding } from './src/screens/Onboarding';
import { ScreenGames } from './src/screens/ScreenGames';
import { COLORS, FONTS } from './src/assets/const';
import { Games } from './src/screens/Games';
import { CongratulationsScreen } from './src/screens/CongratulationsScreen';
import { MedalScreen } from './src/screens/MedalScreen';
// import { ScreenGamesTwo } from './src/screens/ScreenGamesTwo';
import { Reports } from './src/screens/Reports';
import { Loading } from './src/screens/Loading';
import { HomeDependent } from './src/screens/HomeDependent';
import { DependentProfile } from './src/screens/DependentProfile';
import { ResponsiveLogin } from './src/screens/Login';
import { SupportButton } from './src/screens';
import { SupportButtonManagement } from './src/screens/SupportButton/buttonAlertManagement';
import { SupportButtonForKid } from './src/screens/SupportButton/buttonAlertKid';



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
        {/* <SupportButtonForKid/> */}
        <SupportButtonManagement/>
        {/* <SupportButton/> */}
        <Toast />
      </>
    );
  }

}

// const bottomShadow = {
//   shadowOffset: { width: 0, height: 0, },
//   shadowColor: 'black',
//   shadowOpacity: 1,
//   shadowRadius: 5,
//   elevation: 5,
// }

// const styles = StyleSheet.create({

//   container: {
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     position: 'absolute',
//     top: 500,
//     left: 0,
//     width: 400,
//     height: 150,
//     zIndex: 10,
//     backgroundColor: COLORS.red,
//   },
//   buttonContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//     position: 'relative',
//     top: 0,
//     right: 0,
//     width: 180,
//     height: 150,
//     backgroundColor: COLORS.blue
//   },
//   buttonGames: {
//     position: 'relative',
//     width: 150,
//     height: 60,
//     top: 400,
//     right: -80,
//     fontFamily: FONTS.title,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: '450%',
//     marginRight: '90%',
//     zIndex: 2,

//     backgroundColor: COLORS.beige,
//     ...bottomShadow
//   },
//   text: {
//     color: COLORS.white,
//     fontFamily: FONTS.title,
//     fontWeight: 'bold',
//     fontSize: 20,
//     zIndex: 10,
//     backgroundColor: COLORS.beige,

//   }


// })
