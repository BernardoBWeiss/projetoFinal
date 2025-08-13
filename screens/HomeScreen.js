import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function HomeScreen({ route, navigation }) {
    const { saldoConta } = route.params;  // Pega o saldo passado pela tela anterior
    const [investimento, setInvestimento] = useState('');

    const handleInvestimentoChange = (value) => {
        // Limitar o valor máximo do investimento ao saldo da conta
        if (parseFloat(value) > parseFloat(saldoConta)) {
            alert('O valor não pode ser maior que o saldo da conta!');
            setInvestimento(saldoConta);  // Limitar ao saldo máximo
        } else {
            setInvestimento(value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Olá, João!</Text>

            {/* Exibição do saldo da conta */}
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceTitle}>Saldo da Conta</Text>
                <Text style={styles.balanceAmount}>R$ {saldoConta}</Text>
            </View>

            {/* Opções de Ação */}
            <Text style={styles.optionTitle}>Escolha uma opção:</Text>

            {/* Investimento */}
            <TextInput
                style={styles.input}
                placeholder="Valor para Investir"
                keyboardType="numeric"
                value={investimento}
                onChangeText={handleInvestimentoChange}
            />

            {/* Botão único para Inflação e Investimentos */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Inflação e Investimentos"
                    onPress={() => navigation.navigate('InflaçãoEInvestimentos', { saldoConta, investimento })}
                    color="#000000ff"  // Cor do texto do botão
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F3A57',  // Azul escuro
        padding: 20,
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',  // Título em branco
        marginBottom: 20,
    },
    balanceContainer: {
        backgroundColor: '#4E9FBC',  // Azul claro para o cartão do saldo
        padding: 20,
        borderRadius: 10,
        marginBottom: 40,
        width: '100%',
        alignItems: 'center',
    },
    balanceTitle: {
        fontSize: 18,
        color: '#000000ff',  // Cor do texto do título
        marginBottom: 10,
    },
    balanceAmount: {
        fontSize: 36,
        color: '#000000ff',  // Cor do texto do saldo
        fontWeight: 'bold',
    },
    optionTitle: {
        fontSize: 18,
        color: '#F4F4F9',  // Cor do subtítulo
        marginBottom: 20,
    },
    buttonContainer: {
        width: '80%',
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#2C6A8D',  // Cor de fundo dos botões
        overflow: 'hidden',
    },
    input: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        color: '#000000ff',
        marginBottom: 20,
        width: '80%',
    },
    additionalActions: {
        marginTop: 30,
        width: '100%',
    },
});
