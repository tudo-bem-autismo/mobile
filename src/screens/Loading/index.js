import React from "react";
import { Image, Text, View } from "react-native";

import style from "./style";

import loading from "../../assets/images/chicken.gif"

export const Loading = () => {

    return (
        <View style={style.loadingContainer}>
            <Image
                source={loading}
                style={style.loadingGif}
            />
            <Text style={style.text}>CARREGANDO</Text>
        </View>
    );
}

