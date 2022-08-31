import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { COLORS } from '../../assets/const';
import { Input } from '../Input';

export const FormLogin = () => {
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        

        <View style={styles.container}>
            
                <Input
                    title="E-mail"
                    value={email}
                    iconName="user-circle-o"
                    placeholder="exemplo@gmail.com"
                    borderColor={COLORS.blue}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    title="Senha"
                    value={password}
                    iconName="low-vision"
                    placeholder="com no mínimo 6 caracteres"
                    borderColor={COLORS.purple}
                    onChangeText={text => setPassword(text)}
                />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        padding: 15,
        //height: 300,
        //smarginBottom: 25
    },
    input: {
        marginBottom: 15
    }

});
