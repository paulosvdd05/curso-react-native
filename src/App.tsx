import React from "react";
import  { View, Text, StyleSheet, SafeAreaView } from "react-native"


import ParImpar from "./components/ParImpar";

// import Diferenciar from "./components/Diferenciar";
// import ContadorV2 from "./components/contador/ContadorV2";
// import Pai from "./components/indireta/Pai"
// import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Titulo from "./components/Titulo";
// import CompPadrao, { Comp1,Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/aleatorio'

export default () => (
    <SafeAreaView style={style.App}>
        

        <ParImpar num={1}/>
        {/*
        <Diferenciar />
        <ContadorV2 />
        <Pai /> 
        <Pai /> 
        <Contador inicial={100} passo={12} />
        <Filho a={x} b={y} />
        <Botao />
        <Titulo principal="Cadastro Produto" secundario="Tela de cadastro do protudo"/> */}
        {/* <Aleatorio min={1} max={10} /> */}
        {/* <CompPadrao />
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow:1,
        justifyContent: "center",
        alignItems:"center",
        padding:20        
    }
})

