import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import NutritionScreen from './screens/NutritionScreen';
import RecipeScreen from './screens/RecipeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BarcodeScanner from './screens/BarcodeScanner';
import { ProductListContextProvider } from './components/ProductListContext';

const Stack = createStackNavigator();

//Defining an object with default options for all stack screens
const stackScreenOptions = { headerShown: false };

// Creating an array of stack screens and mapping through it to create the screens
const StackScreens = [
  { name: "Home", component: HomeScreen },
  { name: "Login", component: LoginScreen },
  { name: "Register", component: RegisterScreen },
  { name: "Nutrition", component: NutritionScreen },
  { name: "Recipes", component: RecipeScreen },
  { name: "Profile", component: ProfileScreen },
  { name: "BarcodeScanner", component: BarcodeScanner },
].map(({ name, component }) => (
  <Stack.Screen key={name} name={name} component={component} options={stackScreenOptions} />
));

// Exported App function component
export default function App() {
  // Render the layout
  return (
    // Wrapping the layout with AppContext Provider to make the productListContext object available to all child components
    <ProductListContextProvider>
      <NavigationContainer>
        <Stack.Navigator>{StackScreens}</Stack.Navigator>
      </NavigationContainer>
    </ProductListContextProvider>
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
