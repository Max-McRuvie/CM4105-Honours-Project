import React, { useEffect, useState, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './context/AppContext';
import { auth } from './firebase/firebaseConfig'

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import NutritionScreen from './screens/NutritionScreen';
import RecipeScreen from './screens/RecipeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BarcodeScanner from './screens/BarcodeScanner';


const Stack = createStackNavigator();

//Defining an object with default options for all stack screens
const stackScreenOptions = { headerShown: false };

// Creating an array of stack screens and mapping through it to create the screens
const signedInScreens = [
  { name: "Home", component: HomeScreen },
  { name: "Nutrition", component: NutritionScreen },
  { name: "Recipes", component: RecipeScreen },
  { name: "Profile", component: ProfileScreen },
  { name: "BarcodeScanner", component: BarcodeScanner },
]

const signedOutScreens = [
  { name: "Login", component: LoginScreen },
  { name: "Register", component: RegisterScreen },
]

const createStackScreens = (screens, options) => screens.map(({ name, component }) => (
  <Stack.Screen key={name} name={name} component={component} options={options} />
));

// Exported App function component
export default function App() {
  // State to keep track of the user's authentication status
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const screens = useMemo(() => (user ? signedInScreens : signedOutScreens), [user]);

  const onAuthStateChanged = (result) => {
    setUser(result)
    if (initializing) setInitializing(false);
  } 

  if(initializing) return null;


  // FIXME: Users name is not displayed on initial load of home screen, but is displayed on subsequent loads
  return user ? (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>{createStackScreens(screens, stackScreenOptions)}</Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>{createStackScreens(screens, stackScreenOptions)}</Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
