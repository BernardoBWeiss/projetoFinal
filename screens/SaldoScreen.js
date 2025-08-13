import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SaldoScreen({ navigation }) {
    const [saldo, setSaldo] = useState('');

    const handleSaldoSubmit = () => {
        if (parseFloat(saldo) > 0) {
            // Navegar para a HomeScreen e passar o saldo
            navigation.navigate('Home', { saldoConta: saldo });
        } else {
            alert('Por favor, insira um saldo válido!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Digite o saldo da sua conta:</Text>
            <TextInput
                style={styles.input}
                placeholder="Saldo da Conta"
                keyboardType="numeric"
                value={saldo}
                onChangeText={setSaldo}
            />
            <Button title="Confirmar Saldo" onPress={handleSaldoSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1F3A57', // Fundo escuro
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        color: '#ffffff',
        marginBottom: 20,
        width: '80%',
    },
});
