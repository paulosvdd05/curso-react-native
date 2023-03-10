import React from "react";
import { Text } from "react-native";
import Estilo from './estilo';

export default ({min, max}) => {
    let numAleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <Text style={Estilo.txtG}>
           O valor aleatorio é {numAleatorio}
        </Text>
    )
}