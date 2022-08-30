import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { COLORS } from '../../assets/const';
import { Input } from '../Input';

export const FormLogin = () => {
    return (
        <View style={styles.container}>
            
                <Input
                    title="E-mail"
                    iconName="user-circle-o"
                    placeholder="exemplo@gmail.com"
                    borderColor={COLORS.blue}
                    style={{marginBottom: 30}}
                    
                />
                <Input
                    title="Senha"
                    iconName="low-vision"
                    placeholder="com no mínimo 6 caracteres"
                    borderColor={COLORS.purple}
                />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        height: 300,
        marginBottom: 25
    },

});
