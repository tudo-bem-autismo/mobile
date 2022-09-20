import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import style from "../DependentListing/style";
import backgroundMenu from "../../assets/images/backgroundMenu.png";
import addIcon from "../../assets/images/addIcon.png";
import júlia from "../../assets/images/júlia.png";
import maria from "../../assets/images/maria.png";
import { BackButton } from "../../components/Button";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { Option } from "../../components/DependentListing/Option";

export const DependentListing = () => {

    const [option, setOption] = useState(false);

    return (
        <View style={style.mainContainer}>
            <ImageBackground
                source={backgroundMenu}
                resizeMode="cover"
                style={style.background}
            >

                <BackButton
                    title="Voltar"
                />

                <View style={style.selectionChildContainer}>
                    <View style={style.container}>

                        <View style={style.textContainer}>
                            <Text style={style.textSelect}>SELECIONE A CRIANÇA</Text>
                        </View>

                        <View style={style.selectedContainer}>

                            <TouchableOpacity style={style.option}>
                                <Image source={addIcon} />
                                <Text style={style.textAddOption}>ADICIONAR</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={style.option}
                                onPress={() => setOption(true)}
                            >
                                <Image source={júlia} />
                                <Text style={style.textOption}>JÚLIA</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setOption(true)}
                                style={style.option}
                            >
                                <Image source={maria} />
                                <Text style={style.textOption}>MARIA</Text>
                            </TouchableOpacity>

                        </View>

                        {
                            option && (
                                <Option />
                            )

                        }

                    </View>
                </View>

            </ImageBackground>

        </View>
    );
}
