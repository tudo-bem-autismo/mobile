import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import style from "../DependentListing/style";
import backgroundMenu from "../../assets/images/backgroundMenu.png";
import addIcon from "../../assets/images/addIcon.png";
import maria from "../../assets/images/maria.png";
import { BackButton } from "../../components/Button";
import { Dependent } from "../../components/DependentListing/Dependent";
import { Option } from "../../components/DependentListing/Option";
import { getResponsibleDependentsService } from "../../services";
import { Loading } from "../Loading";

export const DependentListing = ({ navigation }) => {

    const [option, setOption] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [dependents, setDependents] = useState([]);

    const getDependents = async () => {
        const result = await getResponsibleDependentsService()
        setDependents(result.data)

    }

    useEffect(() => {
        getDependents()
        setIsLoading(false)

    }, [])

    return (
        <View style={style.mainContainer}>
            {isLoading ? (
                <Loading />
            ) : (
                <ImageBackground
                    source={backgroundMenu}
                    resizeMode="cover"
                    style={style.background}
                >

                    <BackButton
                        title="Voltar"
                        navigation={navigation}
                    />

                    <View style={style.selectionChildContainer}>
                        <View style={style.container}>

                            <View style={style.textContainer}>
                                <Text style={style.textSelect}>SELECIONE A CRIANÇA</Text>
                            </View>

                            <View style={style.selectedContainer}>

                                <TouchableOpacity
                                    style={style.addButton}
                                    onPress={() => navigation.navigate('DependentRegister')}
                                >
                                    <Image
                                        style={style.addIcon}
                                        source={addIcon}
                                    />
                                    <Text style={style.textAddOption}>ADICIONAR</Text>
                                </TouchableOpacity>

                                {
                                    dependents.map(item => (
                                        <Dependent
                                            name={item.name}
                                            photo={item.photo}
                                            key={item.id}
                                            onPress={() => setOption(true)}
                                        />
                                    ))
                                }

                            </View>

                            {
                                option && (
                                    <Option
                                        navigation={navigation}
                                    />
                                )

                            }

                        </View>
                    </View>

                </ImageBackground>
            )}

        </View>
    );
}
