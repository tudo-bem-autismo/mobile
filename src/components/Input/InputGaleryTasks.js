import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../../assets/const";
import { getGendersService } from "../../services/gender";
import next from '../../assets/icons/next.png';


export const InputGaleryTasks = ({ hasError, onPress, image }) => {

  return (

    <TouchableOpacity
      style={hasError ? style.errorModalGaleryButton : style.modalGaleryButton}
      onPress={() => onPress()}
    >
      <Text style={style.textModalGalery}>Icone da tarefa</Text>
      <Image style={style.imageTask} source={{uri : image}}/>
      <Image source={next} />
    </TouchableOpacity>

  );

};


const style = StyleSheet.create({
  modalGaleryButton: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.white,
    fontSize: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
  errorModalGaleryButton: {
    width: "95%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    fontSize: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    borderColor: COLORS.red,
  }, textModalGalery: {
    fontFamily: FONTS.mandali,
    fontSize: 20,
    color: COLORS.gray
  },
  imageTask: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.red
  }
});
