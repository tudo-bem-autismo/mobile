import React from "react";
import { View } from "react-native";
import styles from "./style.js";

import { FormManagementDependent } from "../../components/FormManagementDependent/FormManagementDependent.js";

export function DependentManagement({ route, navigation }) {

    let { idDependent } = route.params;

    return (

        <View style={styles.mainContainer}>

            <FormManagementDependent
                navigation={navigation}
                idDependent={idDependent}
            />

        </View >

    );

}