import { Mandali_400Regular } from '@expo-google-fonts/mandali';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';

import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

import { ResponsiveLogin } from './src/screens/Login';
import Navigation from './src/navigation/navigation';
import { DependentManagement } from './src/screens/DependentManagement';
import { DependentRegister } from './src/screens/DependentRegister'
import { ResponsibleManagement } from './src/screens/ResponsibleManagement';
import { ResponsiveRegister } from './src/screens/ResponsibleRegister';
import { ResponsiblePassword } from './src/screens/ResponsibleManagement/responsiblePassword';
import { DependentListing } from './src/screens/DependentListing';
import { Menu } from './src/screens/Menu';

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
        {/* <ResponsiveLogin /> */}
        {/* <ResponsiveRegister /> */}
        {/* <ResponsibleManagement /> */}
        {/* <ResponsiblePassword/> */}
        <DependentManagement/>
        {/* <Loading/> */}
        {/* <Menu /> */}
        {/* <DependentListing/> */}
        {/* <DependentRegister/>  */}
        {/* <Toast />
        {/* <ResponsiveRegister />*/}
        {/* <Navigation /> */}
        <Toast />
      </>
    );
  }

}
