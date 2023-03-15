import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
        <Quadrado cor='#ff801a'/>
        <Quadrado cor='#090'/>
        <Quadrado cor='#009'/>
        <Quadrado cor='#0ab'/>
        <Quadrado cor='#a2b'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    }
})