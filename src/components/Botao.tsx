import React from "react";
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn('Exec1 ')
    }

    return (
        <>
            <Button title="Executar #01" 
            onPress={executar} />
            {/* arrow function */}
            <Button title="Executar #02" 
            onPress={function () {
                console.warn('Exec2')
            }} />
            {/* arrow function */}
            <Button title="Executar #03" 
            onPress={() => {
                console.warn('Exec3')
            }} />

        </>
    )
}