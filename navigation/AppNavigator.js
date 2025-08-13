import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SaldoScreen from '../screens/SaldoScreen';  // Tela de saldo
import HomeScreen from '../screens/HomeScreen';   // Tela inicial
import InvestmentScreen from '../screens/InvestimentoScreen';  // Corrigido para InvestimentoScreen
import InflationScreen from '../screens/InflacaoScreen';    // Corrigido para InflacaoScreen

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Saldo">
            <Stack.Screen 
                name="Saldo" 
                component={SaldoScreen} 
                options={{ title: 'Saldo da Conta' }} 
            />
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'InvesteLar' }} 
            />
            <Stack.Screen 
                name="Investimento" 
                component={InvestmentScreen} 
                options={{ title: 'Simulador de Investimentos' }} 
            />
            <Stack.Screen 
                name="Inflação" 
                component={InflationScreen} 
                options={{ title: 'Calculadora de Inflação' }} 
            />
        </Stack.Navigator>
    );
}
