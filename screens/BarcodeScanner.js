import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Text, View, StyleSheet, Button, TextInput, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import  getProductInformation  from '../apis/FoodFactsApi.js';
import { useNavigation } from '@react-navigation/native';
import {AppContext} from '../context/AppContext';

// This component allows the user to scan barcodes and adds the product information to the product list
const BarcodeScanner = () => {
  // State to track if the user has granted camera permission
  const [hasPermission, setHasPermission] = useState(false);
  // State to track if a barcode has been scanned
  const [scanned, setScanned] = useState(false);
  // State to track the manual barcode input
  const [manualBarcodeInput, setManualBarcodeInput] = useState('') 

  // Hook to access navigation object for navigation between screens
  const navigation = useNavigation();
  // Hook to access the context containing the list of scanned products
  const context = useContext(AppContext)
  // Assign the product list context to a variable for easier access
  const products = context.productListState

  // Use effect to request camera permissions on component mount
  useEffect(() => {
    const askPermissions = async () => {
      try{
        // Request camera permission
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        if(status === "granted"){
          // Set hasPermission state to true if permission is granted
          setHasPermission(true);
        } else {
          // Alert the user if permission is not granted
            Alert.alert("Error", "Camera permission not granted")
          }
      } catch (error) {
        // Alert the user if there is an error while requesting permission
        Alert.alert("Error", "There was an error while requesting camera permission")
      }
    };
    askPermissions();
  }, []);

  // useCallback hook to update the scanned products list and set scanned state to false
  const addProductToList = useCallback((product) => {
    // update the product list context with the new product
    products.updateProductList([...products.productList, product]);

    // reset the scanned state
    setScanned(false)
  },[products.productList])

  const handleManualInput = useCallback(async ( barcode ) => {
    console.log(barcode)
    if(!barcode) return Alert.alert("Error", "Please enter a barcode")

    const productInformation = await getProductInformation(barcode)

    Alert.alert(
      "Is this the product you want to add?", 
       `Brand: ${productInformation.brand_name ? productInformation.brand_name : 'Brand name not found' } \nProduct: ${productInformation.product_name}`,
      [
          {
              text: "Cancel",
              // reset scanned state
              onPress: () => setScanned(false),
              style: "cancel"
          },
           { 
              text: "Yes", 
              // add the product to the list
              onPress: () => addProductToList(productInformation),
              style: "ok"
           }
      ]
    )
  })

  // useCallback hook to handle barcode scanned event
  const handleBarCodeScanned = useCallback(async ({ data }) => {
    // set scanned state to true
    setScanned(true)
    // get the product information from the API
    const productInformation = await getProductInformation(data)
    console.log(productInformation)
    // check if the product is not found or if there is no nutriments data
    productInformation == "Product not found" || !productInformation.nutriments ? (
      // Alert the user that the product was not found or that there is no nutritional information 
      Alert.alert(
        "Alert Title",
        `The product scanned is not found in our database` || `Unable to retrieve nutritional information for this product`,
        [
          {
              text: "Cancel",
              // reset scanned state
              onPress: () => setScanned(false),
              style: "cancel"
           }
        ]
       )
     ) : ( 
      // Alert the user that the product was found and ask if they want to add it to the list
      Alert.alert(
        "Is this the product you want to add?", 
         `Brand: ${productInformation.brand_name ? productInformation.brand_name : 'Brand name not found' } \nProduct: ${productInformation.product_name}`,
        [
            {
                text: "Cancel",
                // reset scanned state
                onPress: () => setScanned(false),
                style: "cancel"
            },
             { 
                text: "Yes", 
                // add the product to the list
                onPress: () => addProductToList(productInformation),
                style: "ok"
             }
        ]
      )
    );
  }, [scanned, addProductToList]); 

  // Return the barcode scanner component
  return (
    <View>
      { // If the user has granted camera permission, return the barcode scanner component
      hasPermission ? (
            <View>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: '75%', width: '100%' }}
              />
              <TouchableOpacity
                onPress={() => {
                  // reset scanned state
                  setScanned(false);
                  // navigate to the nutrition screen
                  navigation.navigate("Home");
                }}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Return</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // reset scanned state
                  setScanned(false);
                  // navigate to the nutrition screen
                  navigation.navigate("Nutrition");
                }}
                style={styles.button}
                >
                <Text style={styles.buttonText}>View Scanned Item/Items</Text>
              </TouchableOpacity>
            </View>
      ) : (
        // If the user has not granted camera permission, return a text input to enter the barcode manually
        <View>
          <View>  
            <TextInput
              placeholder="Enter barcode"
              value={manualBarcodeInput}
              onChangeText={text => setManualBarcodeInput(text)}
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                padding: 10,
                marginBottom: 10,
              }}
            />
            <Button title="Open camera" onPress={() => setScanned(true)} />
            <TouchableOpacity
                onPress={() => {
                  // navigate to the nutrition screen
                  handleManualInput(manualBarcodeInput)
                }}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Search Item</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // reset scanned state
                  setScanned(false);
                  // navigate to the nutrition screen
                  navigation.navigate("Nutrition");
                }}
                style={styles.button}
                >
                <Text style={styles.buttonText}>View Scanned Item/Items</Text>
              </TouchableOpacity>
            <StatusBar style="auto" />
          </View>
        </View>
      )}
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    padding: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
}); 