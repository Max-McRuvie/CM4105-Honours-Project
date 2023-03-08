import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContextProvider } from './context/AppContext';
import { auth } from './firebase/firebaseConfig';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import NutritionScreen from './screens/NutritionScreen';
import RecipeListScreen from './screens/RecipeListScreen';
import ProfileScreen from './screens/ProfileScreen';
import BarcodeScanner from './screens/BarcodeScanner';
import RecipeScreen from './screens/RecipeScreen';

const Stack = createNativeStackNavigator();

//Defining an object with default options for all stack screens
const stackScreenOptions = { headerShown: false };

// Creating a function to map through the screens array and return a stack screen for each
const createStackScreens = (screens, options) => screens.map(({ name, component }) => (
  <Stack.Screen key={name} name={name} component={component} options={options} />
));

// Signed in stacks for navigation
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={ {headerShown:false} }>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
  </HomeStack.Navigator>
);

const NutritionStack = createNativeStackNavigator();
const NutritionStackScreen = () => (
  <NutritionStack.Navigator screenOptions={ {headerShown:false} }>
    <NutritionStack.Screen name="NutritionScreen" component={NutritionScreen}/>
  </NutritionStack.Navigator>
);

const BarcodeScannerStack = createNativeStackNavigator();
const BarcodeScannerScreen = () => (
  <BarcodeScannerStack.Navigator screenOptions={ {headerShown:false} }>
    <BarcodeScannerStack.Screen name="BarcodeScannerScreen" component={BarcodeScanner}/>
  </BarcodeScannerStack.Navigator>
);


const RecipesStack = createNativeStackNavigator();
const RecipesStackScreen = () => (
  <RecipesStack.Navigator>
    <RecipesStack.Screen name="RecipesListScreen" component={RecipeListScreen} options={ {headerShown:false} }/>
    <RecipesStack.Screen name="RecipeScreen" component={RecipeScreen} options={{
          title: 'Recipe',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
  </RecipesStack.Navigator>
);

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={ {headerShown:false} }>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}/>
  </ProfileStack.Navigator>
);

// Sign out screens
const signedOutScreens = [
  { name: "Login", component: LoginScreen },
  { name: "Register", component: RegisterScreen },
]

// Creating a tab navigator
const Tab = createBottomTabNavigator();
// Exported App function component
export default function App() {
  useFonts({
    'Inter-Regular': 'https://rsms.me/inter/font-files/Inter-Regular.otf?v=3.12',
    'Inter-SemiBold': 'https://rsms.me/inter/font-files/Inter-SemiBold.otf?v=3.12',
    'Inter-Bold': 'https://rsms.me/inter/font-files/Inter-Bold.otf?v=3.12',
    'Inter-ExtraBold': 'https://rsms.me/inter/font-files/Inter-ExtraBold.otf?v=3.12',
  });

  // State to keep track of the user's authentication status
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = (result) => {
    setUser(result)
    if (initializing) setInitializing(false);
  } 

  if(initializing) return null;


  // FIXME: Users name is not displayed on initial load of home screen, but is displayed on subsequent loads

   return user ? (
    <AppContextProvider>
      <NavigationContainer>
         <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if(route.name === 'Nutrition') {
                iconName = focused
                  ? 'nutrition'
                  : 'nutrition-outline';
              } else if (route.name === 'Barcode Scanner') {
                iconName = focused 
                  ? 'camera' 
                  : 'camera-outline';
              }else if (route.name === 'Recipes') {
                iconName = focused
                  ? 'book'
                  : 'book-outline';
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'person'
                  : 'person-outline';
              } 
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
          })}>
            <Tab.Screen
              name="Home" 
              component={HomeStackScreen}/>
            <Tab.Screen
              name="Nutrition" 
              component={NutritionStackScreen}/>
              
            <Tab.Screen
              name="Barcode Scanner" 
              component={BarcodeScannerScreen}/>
             <Tab.Screen
              name="Recipes" 
              component={RecipesStackScreen}/>
              <Tab.Screen
              name="Profile" 
              component={ProfileStackScreen}/>
         </Tab.Navigator>
       </NavigationContainer>
     </AppContextProvider>
   ) : (
     <NavigationContainer>
       <Stack.Navigator>
          {createStackScreens(signedOutScreens, stackScreenOptions)}
        </Stack.Navigator>
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
