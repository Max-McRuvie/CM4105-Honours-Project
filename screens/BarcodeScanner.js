import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import  getProductInformation  from '../apis/FoodFactsApi.js';
import { useNavigation } from '@react-navigation/native';
import {ProductListContext} from '../components/ProductListContext';


const BarcodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    const navigation = useNavigation();
    const productContext = useContext(ProductListContext)
    
    useEffect(() => {
      const askPermissions = async () => {
        try{
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          if(status === "granted"){
            setHasPermission(true);
          } else {
            Alert.alert("Error", "Camera permission not granted")
          }
        } catch (error) {
          Alert.alert("Error", "There was an error while requesting camera permission")
        }
      };
      askPermissions();
    }, []);


    const addProductToList = useCallback((product) => {
      productContext.updateProductList([...productContext.productList, product]);
      setScanned(false)
    },[productContext.productList])

    const handleBarCodeScanned = useCallback(async ({ data }) => {
      setScanned(true)
      const productInformation = await getProductInformation(data)

      productInformation == "Product not found" || !productInformation.nutriments ? (
        Alert.alert(
          "Alert Title",
          `The product scanned is not found in our database` || `Unable to retrieve nutritional information for this product`,
          [
            {
                text: "Cancel",
                onPress: () => setScanned(false),
                style: "cancel"
            }
          ]
        )
      ) : ( 
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
        )
      );
    }, [scanned, addProductToList]);

    return (
      <View>
        {hasPermission ? (
              <View>
                <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={{ height: '90%', width: '100%' }}
                />
                <TouchableOpacity
                  onPress={() => {
                    setScanned(false);
                    navigation.navigate("Nutrition");
                  }}
                  style={styles.button}
                  >
                  <Text style={styles.buttonText}>View Scanned Item/Items</Text>
                </TouchableOpacity>
              </View>
        ) : (
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
              <Button title="Open camera" onPress={() => setScanned(true)} />
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