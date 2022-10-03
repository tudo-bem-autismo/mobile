
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DependentListing } from "../screens/DependentListing";
import { HomeScreen } from "../screens/HomeScreen";
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

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerLeft: ()=> null, headerShown: false }} />
                <Stack.Screen name="OnboardingGames" component={OnboardingGames} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingRoutines" component={OnboardingRoutines} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={ResponsiveLogin} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={ResponsiveRegister} options={{ headerShown: false }} />
                <Stack.Screen name="Salutation" component={SalutationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Management" component={ResponsibleManagement} options={{ headerShown: false }} />
                <Stack.Screen name="Password" component={ResponsiblePassword} options={{ headerShown: false }} />
                <Stack.Screen name="DependentListing" component={DependentListing} options={{ headerShown: false }} />
                <Stack.Screen name="DependentManagement" component={DependentManagement} options={{ headerShown: false }} />
                <Stack.Screen name="DependentRegister" component={DependentRegister} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;