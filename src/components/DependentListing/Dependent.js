import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

// import myProfile from '../../assets/images/myProfile.png';


export const Dependent = ({ name, photo, onPress }) => {

    return (

        <TouchableOpacity
            style={style.option}
            onPress={() => onPress()}
        >
            <Image
                style={style.photo}
                source={photo} 
            />
            <Text style={style.textOption}>{name}</Text>
        </TouchableOpacity>

    );

}

const style = StyleSheet.create({
    option: {
        padding: 10,
    },
    textOption: {
        fontFamily: FONTS.title,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 5,
    },
    photo: {
        width: 90,
        height: 90,
        borderRadius: 50,
        // backgroundColor: COLORS.red
    }
});

