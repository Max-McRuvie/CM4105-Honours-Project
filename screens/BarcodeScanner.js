import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, StatusBar, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarcodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");
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

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      Alert.alert(
        "Alert Title",
        "Would you like to scan again or see ingredients?",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { 
                text: "Scan again?", 
                onPress: () => setScanned(false),
                style: "ok"
            },
            { 
                text: "See ingredients", 
                onPress: () => console.log(data),
                style: "ok"
            }
        ]
        );
      //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission && hasPermission) {
        console.log("Camera opened, permission true");
        return (
          <View>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: '100%', width: '100%' }}
            />
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

const styles = StyleSheet.create({}); 