import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { COLORS } from '../../assets/const';
import { Input } from '../Input';

export const FormSwiper = ({ formIndex }) => {
    return (
        <Swiper
            style={styles.wrapper}
            paginationStyle={styles.paginationStyle}
            dotStyle={styles.dot}
            activeDotStyle={styles.selectedDot}
            index={formIndex}
            loop={false}
            scrollEnabled={false}
            >
            <View style={styles.slide1}>
                <Input
                    title="Nome"
                    iconName="user-circle-o"
                    placeholder="seu nome completo"
                    borderColor={COLORS.blue}
                />
                <Input
                    title="Telefone"
                    iconName="phone"
                    placeholder="(99) 99999-9999"
                    borderColor={COLORS.purple}
                />
            </View>
            <View style={styles.slide2}>

                <Input
                    title="Email"
                    iconName="envelope"
                    placeholder="exemplo@gmail.com"
                    borderColor={COLORS.pink}
                />
                <Input
                    title="Senha"
                    iconName="phone"
                    placeholder="com no mínimo 4 caracteres"
                    borderColor={COLORS.yellow}
                />
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        // paddingBottom: 10,
        // backgroundColor: COLORS.blue
    },
    slide1: {
        flex: 2.5,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },
    slide2: {
        flex: 2.5,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },
    slideButton: {
        height: 55,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    dot: {
        height: 20,
        width: 20,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.black,
    },
    selectedDot: {
        height: 20,
        width: 20,
        backgroundColor: COLORS.purple,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.black,
    },
    paginationStyle: {
        height: 20,

    }
});

// AppRegistry.registerComponent('myproject', () => SwiperComponent)