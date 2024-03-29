import React from "react";
import  { View, Text, StyleSheet, SafeAreaView } from "react-native"

import Mega from "./components/mega/Mega";
// import FlexBoxV3 from "./components/layout/FlexBoxV3";
// import FlexBoxV1 from "./components/layout/FlexBoxV1";
// import DigiteSeuNome from "./components/DigiteSeuNome";
// import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
// import ListaProdutos from "./components/produtos/ListaProdutos";
// import UsuarioLogado from "./components/UsuarioLogado";
// import Familia from "./components/relacao/Familia";
// import Membro from "./components/relacao/Membro";
// import ParImpar from "./components/ParImpar";
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

       <Mega qtdeNumeros={7} />
        {/*
        <FlexBoxV3 />
         <DigiteSeuNome />
        <ListaProdutos />
        <ListaProdutosV2 />
        <UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@gmail.com'} } />
        <UsuarioLogado usuario={ {nome: 'Ana'} } />
        <UsuarioLogado usuario={ {email: 'Calos@gmail.com'} } />
        <UsuarioLogado usuario={{}} />
        <UsuarioLogado usuario={null} />
    
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
         <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>

        <ParImpar num={1}/>
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

