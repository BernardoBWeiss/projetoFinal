import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao InvesteLar</Text>
            <Text style={styles.subtitle}>Escolha uma simulação:</Text>
            <Button title="Simulador de Investimento" onPress={() => navigation.navigate('Investimento')} />
            <View style={{ marginVertical: 10 }} />
            <Button title="Calculadora de Inflação" onPress={() => navigation.navigate('Inflação')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
    },
    title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 20
    },
    subtitle: {
        fontSize: 16, marginBottom: 20
    }
});
