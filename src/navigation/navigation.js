
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DependentListing } from "../screens/DependentListing";
import { HomeResponsible } from '../screens/HomeResponsible';
import { ResponsiveLogin } from "../screens/Login";
import { Menu } from "../screens/Menu";
import { Onboarding } from "../screens/Onboarding";
import { OnboardingGames } from "../screens/OnboardingGames";
import { OnboardingRoutines } from "../screens/OnboardingRoutines";
import { ResponsibleManagement } from "../screens/ResponsibleManagement";
import { ResponsiblePassword } from "../screens/ResponsibleManagement/responsiblePassword";
import { ResponsiveRegister } from "../screens/ResponsibleRegister";
import { DependentRegister } from '../screens/DependentRegister';
import { DependentManagement } from '../screens/DependentManagement';
import { SalutationScreen } from '../screens/SalutationScreen';
import { RoutineResponsible } from '../screens/RoutineResponsible';
// import { Games } from '../screens/Games';
import { ScreenGames } from '../screens/ScreenGames';
import { CongratulationsScreen } from '../screens/CongratulationsScreen';
import { TabsDependent } from './tabsDependent';
import { TabsResponsible } from './tabsResponsible';
import { Games } from '../screens/Games';
import { MenuDependent } from '../screens/MenuDependent';
import { DependentProfile } from '../screens/DependentProfile';
import { HomeDependent } from '../screens/HomeDependent';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerLeft: () => null, headerShown: false }} />
                <Stack.Screen name="OnboardingGames" component={OnboardingGames} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingRoutines" component={OnboardingRoutines} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={ResponsiveLogin} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={ResponsiveRegister} options={{ headerShown: false }} />
                <Stack.Screen name="Salutation" component={SalutationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="HomeResponsible" component={HomeResponsible} options={{ headerShown: false }} />
                <Stack.Screen name="RoutineResponsible" component={RoutineResponsible} options={{ headerShown: false }} />
                <Stack.Screen name="Management" component={ResponsibleManagement} options={{ headerShown: false }} />
                <Stack.Screen name="Password" component={ResponsiblePassword} options={{ headerShown: false }} />
                <Stack.Screen name="DependentListing" component={DependentListing} options={{ headerShown: false }} />
                <Stack.Screen name="DependentManagement" component={DependentManagement} options={{ headerShown: false }} />
                <Stack.Screen name="DependentRegister" component={DependentRegister} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Games" component={Games} options={{ headerShown: false }} /> */}
                <Stack.Screen name="ScreenGames" component={ScreenGames} options={{ headerShown: false }} />
                <Stack.Screen name="CongratulationsScreen" component={CongratulationsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TabsResponsible" component={TabsResponsible} options={{ headerShown: false }} />
                <Stack.Screen name="TabsDependent" component={TabsDependent} options={{ headerShown: false }} />
                <Stack.Screen name="Games" component={Games} options={{ headerShown: false }} />
                <Stack.Screen name="MenuDependent" component={MenuDependent} options={{ headerShown: false }} />
                <Stack.Screen name="DependentProfile" component={DependentProfile} options={{ headerShown: false }} />
                <Stack.Screen name="HomeDependent" component={HomeDependent} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;