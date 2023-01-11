import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {ProductListContext} from '../components/ProductListContext';

const NutritionScreen = () => {
    const { productList } = useContext(ProductListContext)



    if(productList.length === 0){
        return (
            <>
                <Text style={{fontSize: 30}}>No list present</Text>
            </>
        )
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}> 
                    <Text style={{fontSize: 30}}>Nutrition Information</Text>
                </View>

                <View style={styles.middleContainer}>
                    <Text style={{fontSize: 30}}></Text>
                </View>

                <View style={styles.footerContainer}>
                    <NavigationBar />
                </View>
            </View>
        )
    }
}

export default NutritionScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        width: '80%',
        height: '30%',
        justifyContent: 'center',
        marginLeft: "10%",
    },
    middleContainer: {
        width: '80%',
        height: '60%',
        alignItems: 'center',
    },
    footContainer: {
        height: '30%',
    },
})