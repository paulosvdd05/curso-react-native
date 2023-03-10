import React from "react";
import { Text } from "react-native";
import Estilo from './estilo';

export default (props) => {
    let numAleatorio = parseInt(Math.random() * (props.max - props.min) + props.min)
    return (
        <Text style={Estilo.txtG}>
            O valor {props.max} é maior que o valor {props.min} {numAleatorio}
        </Text>
    )
}