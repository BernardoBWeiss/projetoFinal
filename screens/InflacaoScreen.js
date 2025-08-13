import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function InflacaoScreen() {
    const [valorAtual, setValorAtual] = useState('');
    const [taxaInflacao, setTaxaInflacao] = useState('');
    const [anos, setAnos] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularInflacao = () => {
        const P = parseFloat(valorAtual);
        const i = parseFloat(taxaInflacao) / 100;
        const t = parseInt(anos);

        if (isNaN(P) || isNaN(i) || isNaN(t)) return;

        const valorFuturo = P * Math.pow(1 + i, t);
        const poderCompra = P / valorFuturo;

        setResultado({
            valorCorrigido: valorFuturo.toFixed(2),
            poderCompra: (poderCompra * 100).toFixed(2) + '%',
        });
    };

    return (
        <View style={styles.container}>
            <Text>Valor Atual (R$)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={valorAtual}
                onChangeText={setValorAtual}
            />

            <Text>Taxa de Inflação Anual (%)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={taxaInflacao}
                onChangeText={setTaxaInflacao}
            />

            <Text>Tempo (anos)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={anos}
                onChangeText={setAnos}
            />

            <Button title="Calcular" onPress={calcularInflacao} />

            {resultado && (
                <View style={{ marginTop: 20 }}>
                    <View style={styles.resultBox}>
                        <Text style={styles.label}>Valor Futuro Corrigido:</Text>
                        <Text>{`R$ ${resultado.valorCorrigido}`}</Text>
                    </View>
                    <View style={styles.resultBox}>
                        <Text style={styles.label}>Poder de Compra:</Text>
                        <Text>{resultado.poderCompra}</Text>
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
