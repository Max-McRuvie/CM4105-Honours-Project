import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, {useContext, useCallback} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import getRecipies from'../apis/SpoonacularApi.js'
import { useNavigation } from '@react-navigation/native';

const NutritionScreen = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext)

    // Assign the product list context to a variable for easier access
    const products = context.productListState
    const recipes = context.recipeListState

    const categoryList = products.productList.map((product) => {
        return product.category
    }, [])

    // useCallback hook to update the scanned products list and set scanned state to false
    const getRecipeList = useCallback(async () => {
        let recipies = await getRecipies(categoryList)
        // update the product list context with the new product
        await recipes.updateRecipeList([...recipes.recipeList, recipies]);
        // Navigate to the recipe page
        navigation.navigate('Recipes')
    },[recipes.recipeList])

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}> 
                <Text style={{fontSize: 30}}>Nutrition Page</Text>
            </View>
            {products.productList.length === 0 ? (
                <View style={styles.middleContainer}>
                    <Text style={{fontSize: 30}}>No list present</Text>
                </View>
            ) : (
                <View style={styles.middleContainer}>
                    <ScrollView>
                        {products.productList.map((product, index) => (
                            <View key={index} style={styles.productContainer}>
                                <Text style={styles.productTitle}>
                                    Item {index + 1}
                                </Text>
                                <Text style={styles.productName}>
                                    Product Name: {product.product_name}
                                </Text>
                                <Text style={styles.product}>
                                    Brand Name: {product.brand_name}
                                </Text>
                                <View style={styles.ingredientsContainer}>
                                    <Text>
                                        Ingredients: {product.ingredients}
                                    </Text>
                                </View>
                                <View style={styles.nutritionContainer}>
                                    <Text>
                                        Energy: {product.nutriments.energy_value} {product.nutriments.energy_unit}
                                        </Text>
                                    <Text>
                                        Fat: {product.nutriments.fat_value} {product.nutriments.fat_unit}
                                        </Text>
                                    <Text>
                                        Saturated Fat: {product.nutriments.saturated_fat_value} {product.nutriments.saturated_fat_unit}
                                        </Text>
                                    <Text>
                                        Carbohydrates: {product.nutriments.carbohydrates_value} {product.nutriments.carbohydrates_unit}
                                        </Text>
                                    <Text>
                                        Sugars: {product.nutriments.sugars_value} {product.nutriments.sugars_unit}
                                        </Text>
                                    <Text>
                                        Fiber: {product.nutriments.fiber_value} {product.nutriments.fiber_unit}
                                        </Text>
                                    <Text>
                                        Proteins: {product.nutriments.proteins_value} {product.nutriments.proteins_unit}
                                        </Text>
                                    <Text>
                                        Salt: {product.nutriments.salt_value} {product.nutriments.salt_unit}
                                        </Text>
                                    <Text>
                                        Sodium: {product.nutriments.sodium_value} {product.nutriments.sodium_unit}
                                        </Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            )}
                <View style={styles.footerContainer}>
                    <Button title="Look at Recipes" style={styles.button} onPress={() => 
                        {
                            getRecipeList()
                        }}/>
                    <NavigationBar />
                </View>
            </View>
        )
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
        height: '68%',
        paddingLeft: '10%',
    },
    footContainer: {
        height: '30%',
    },
    productTitle: {
        fontSize: 20,
    },
    productName: {
        paddingLeft: 10,
    },
    product: {
        paddingLeft: 10,
    },     
    ingredientsContainer: {
        paddingLeft: 10,
    }, 
    nutritionContainer: {
        paddingLeft: 10,
    },
})