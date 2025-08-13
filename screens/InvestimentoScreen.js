import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function InvestimentoScreen() {
    const [valorInicial, setValorInicial] = useState('');
    const [taxaMensal, setTaxaMensal] = useState('');
    const [meses, setMeses] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularInvestimento = () => {
        const P = parseFloat(valorInicial);
        const i = parseFloat(taxaMensal) / 100;
        const t = parseInt(meses);

        if (isNaN(P) || isNaN(i) || isNaN(t)) return;

        const montante = P * Math.pow(1 + i, t);
        const juros = montante - P;

        setResultado({
            montante: montante.toFixed(2),
            juros: juros.toFixed(2),
        });
    };

    return (
        <View style={styles.container}>
            <Text>Valor Inicial (R$)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={valorInicial}
                onChangeText={setValorInicial}
            />

            <Text>Taxa de Juros Mensal (%)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={taxaMensal}
                onChangeText={setTaxaMensal}
            />

            <Text>Tempo (meses)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={meses}
                onChangeText={setMeses}
            />

            <Button title="Calcular" onPress={calcularInvestimento} />

            {resultado && (
                <View style={{ marginTop: 20 }}>
                    <View style={styles.resultBox}>
                        <Text style={styles.label}>Valor Final com Juros:</Text>
                        <Text>{`R$ ${resultado.montante}`}</Text>
                    </View>
                    <View style={styles.resultBox}>
                        <Text style={styles.label}>Total de Juros Ganhos:</Text>
                        <Text>{`R$ ${resultado.juros}`}</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    resultBox: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
