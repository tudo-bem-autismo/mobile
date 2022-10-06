import { View } from "react-native";
import styles from "./style.js";


import { FormManagementDependent } from "../../components/FormManagementDependent/FormManagementDependent.js";


export function DependentManagement({ navigation }) {

    return (

        <View style={styles.mainContainer}>

            <FormManagementDependent
                navigation={navigation}
            />

        </View >

    );

}