import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InvestimentoScreen from '../screens/InvestimentoScreen';
import InflacaoScreen from '../screens/InflacaoScreen'; 

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'InvesteLar' }} />
            <Stack.Screen name="Investimento" component={InvestimentoScreen} />
            <Stack.Screen name="Inflação" component={InflacaoScreen} />
        </Stack.Navigator>
    );
}
