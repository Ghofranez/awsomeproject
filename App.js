import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GoBackButton from './src/components/GoBackButton/GoBackButton'; // Ajoutez le chemin correct
import RegisterButton from './src/components/RegisterButton';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen1'; // Importez vos écrans
import SecondScreen from './Screen2';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="HomeScreen" component={Screen1} />
      <Stack.Screen name="SecondScreen" component={Screen2} />
    </Stack.Navigator>
  </NavigationContainer>,
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <HomeScreen/>
      <SecondScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});