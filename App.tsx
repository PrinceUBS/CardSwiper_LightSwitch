import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { COLORS } from './src/config/Constant';
import { HomeScr  } from './src/screens';

const Stack = createStackNavigator();

const App = () => {

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.WHITE} />
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScr} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
  );
};


export default App;
