import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import  getProductInformation  from '../apis/FoodFactsApi.js';
import { useNavigation } from '@react-navigation/native';
import {ProductListContext} from '../components/ProductListContext';


const BarcodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");
    //const [productList, updateProductList] = useState([]);
    const navigation = useNavigation();
    // useEffect(() => {
    //   askPermissions();
    // }, [hasPermission]);
    //ListFunctions: addProductToList
   
    const productContext = useContext(ProductListContext)
    
    const addProductToList = (product) => {
        productContext.updateProductList([...productContext.productList, product]);
        setScanned(false)
    };

    console.log(productContext.productList)

    const askPermissions = () => {
      (async () => {
        console.log("Asking for permissions");
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == "granted");
      })();
    };


    const moveToNutitionScreen = () => {
      setScanned(false)
      navigation.navigate('Nutrition')
    }

    const handleBarCodeScanned = async ({ type, data }) => {
      setScanned(true);
      const productInformation = await getProductInformation(data)
      //console.log(productInformation)
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
      else if (!productInformation.nutriments) {
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
          "Is this the product you want to add?", 
          `Brand: ${productInformation.brand_name ? productInformation.brand_name : 'Brand name not found' } \nProduct: ${productInformation.product_name}`,
          [
              {
                  text: "Cancel",
                  onPress: () => setScanned(false),
                  style: "cancel"
              },
              { 
                  text: "Yes", 
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
              onPress={() => moveToNutitionScreen()}
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