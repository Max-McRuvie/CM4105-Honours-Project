import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import  getProductInformation  from '../apis/FoodFactsApi.js';
import { useNavigation } from '@react-navigation/native';


const BarcodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");
    const [productList, updateProductList] = useState([]);
    /*
    useEffect(() => {
      askPermissions();
    }, [hasPermission]);
    */
    const askPermissions = () => {
      (async () => {
        console.log("Asking for permissions");
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == "granted");
      })();
    };

    const addProductToList = (product) => {
      updateProductList([...productList, [product]]);
      setScanned(false);
    };

    const handleBarCodeScanned = async ({ type, data }) => {
      setScanned(true);
      const productInformation = await getProductInformation(data)
      console.log(productInformation)
      if(productInformation == "Product not found") {
        Alert.alert(
          "Alert Title",
          `The product scanned is not found in our database`,
          [
            {
                text: "Cancel",
                onPress: () => setScanned(false),
                style: "cancel"
            }
          ]
      )} 
      else if (!productInformation.nutriments || !productInformation.ingredients) {
        Alert.alert(
          "Alert Title",
          `Unable to retrieve nutritional information for this product`,
          [  
            {
              text: "Cancel",
              onPress: () => setScanned(false),
              style: "cancel"
            }
          ]
      )}
      else {
        Alert.alert(
          "Alert Title", 
          `The product scanned is made by ${productInformation.brand_name}, the product is ${productInformation.product_name}`,
          [
              {
                  text: "Cancel",
                  onPress: () => setScanned(false),
                  style: "cancel"
              },
              { 
                  text: "This product is correct", 
                  onPress: () => addProductToList(productInformation),
                  style: "ok"
              }
          ]
        );
      }
    };

    if (hasPermission && hasPermission) {
        console.log("Camera opened, permission true");
        return (
          <View>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: '90%', width: '100%' }}
            />
            <TouchableOpacity
              onPress={() => console.log(productList)}
              style={styles.button}
              >
              <Text style={styles.buttonText}>View Scanned Item/Items</Text>
            </TouchableOpacity>
          </View>
        );
      }
  
    return (
      <View>
        <View>  
          <TextInput
            placeholder="Enter barcode"
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              padding: 10,
              marginBottom: 10,
            }}
          />
          <Button title="Open camera" onPress={askPermissions} />
          <StatusBar style="auto" />
        </View>
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