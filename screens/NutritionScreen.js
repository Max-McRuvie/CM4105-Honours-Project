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
                    <Text style={{fontSize: 30}}>Nutrition Page</Text>
                </View>
                <View style={styles.middleContainer}>
                <ScrollView>
                    {productList.map((product, index) => {
                        return (
                            <View key={index} style={styles.productContainer}>
                                <Text style={styles.ingredientsTitle}></Text>
                                <Text style={styles.product }>Brand Name: {product.brand_name}</Text>
                                <Text style={styles.productTitle}>Product Name: {product.product_name}</Text>
                                <View style={styles.ingredientsContainer}>
                                    <Text>Ingredients: {product.ingredients}</Text>
                                </View>
                                <View style={styles.nutritionContainer}>
                                    <Text>Energy: {product.nutriments.energy_value} {product.nutriments.energy_unit}</Text>
                                    <Text>Fat: {product.nutriments.fat_value} {product.nutriments.fat_unit}</Text>
                                    <Text>Saturated Fat: {product.nutriments.saturated_fat_value} {product.nutriments.saturated_fat_unit}</Text>
                                    <Text>Carbohydrates: {product.nutriments.carbohydrates_value} {product.nutriments.carbohydrates_unit}</Text>
                                    <Text>Sugars: {product.nutriments.sugars_value} {product.nutriments.sugars_unit}</Text>
                                    <Text>Fiber: {product.nutriments.fiber_value} {product.nutriments.fiber_unit}</Text>
                                    <Text>Proteins: {product.nutriments.proteins_value} {product.nutriments.proteins_unit}</Text>
                                    <Text>Salt: {product.nutriments.salt_value} {product.nutriments.salt_unit}</Text>
                                    <Text>Sodium: {product.nutriments.sodium_value} {product.nutriments.sodium_unit}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
                </View>
                <View style={styles.footerContainer}>
                    <NavigationBar />
                </View>
            </View>
        )
    }

    // return (
    //     <View style={styles.container}>
    //         <View style={styles.topContainer}> 
    //             <Text style={{fontSize: 30}}>{productList[0][0].brand_name}</Text>
    //         </View>
        
    //         <View style={styles.middleContainer}>
                
    //         </View>
    //         <View style={styles.footerContainer}>
    //             <NavigationBar />
    //         </View>
    //     </View>
    // )
}

export default NutritionScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        width: '80%',
        height: '10%',
        marginTop: '20%',
        justifyContent: 'center',
        marginLeft: "10%",
    },
    middleContainer: {
        width: '100%',
        height: '70%',
        paddingLeft: '10%',
    },
    footContainer: {
        height: '30%',
    },
})