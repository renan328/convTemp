import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
        
            let [temp, setTemp]     = useState();
            let [result, setResult] = useState();

            function Converter(){
                let resultado = (9 * parseFloat(temp) +160) /5;
                setResult(resultado);
            
                alert("O resultado é " + result);
            }   

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Projeto Conversão de Temperatura</Text>
            <TextInput onChangeText={setTemp} style={styles.campo} placeholder="Digite a temperatura em Celsius"></TextInput>
            <TouchableOpacity style={styles.botao} onPress={Converter}>
                <Text style={styles.botaoTexto}> Coverter </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 40
    },

    campo:{
        backgroundColor: '#003',
        color: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        borderRadius: 10
    },

    botao:{
        backgroundColor: '#003',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },

    botaoTexto:{
        color: 'red',
        fontSize: 17,
        fontWeight: 700,
    }
});
