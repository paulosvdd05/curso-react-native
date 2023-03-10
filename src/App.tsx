import React from "react";
import  { View, Text, StyleSheet } from "react-native"

import CompPadrao, { Comp1,Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import Aleatorio from './components/aleatorio'

export default () => (
    <View style={style.App}>
        <Aleatorio min={1} max={10} />
       
        {/* <CompPadrao />
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow:1,
        justifyContent: "center",
        alignItems:"center",
        padding:20        
    }
})

