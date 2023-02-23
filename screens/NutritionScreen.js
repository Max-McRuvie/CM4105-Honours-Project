import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useCallback} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import {getRecipies} from'../apis/SpoonacularApi.js'
import { useNavigation } from '@react-navigation/native';
import { NutritionScreenStyles } from '../styles/stylesheet';

const NutritionScreen = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext)

    // Assign the product list context to a variable for easier access
    const products = context.productListState
    const recipes = context.recipeListState

    const categoryList = products.productList.map((product) => {
        return product.category
    }, [])

    console.log(recipes.recipeList)
    // useCallback hook to update the scanned products list and set scanned state to false
    const getRecipeList = useCallback(async () => {
        let recipiesResponse = await getRecipies(categoryList)
        console.log(recipiesResponse)
        // update the product list context with the new product
        await recipes.updateRecipeList(recipiesResponse)

        navigation.navigate('RecipesList')
    
    },[recipes.recipeList])

    return (
        <View style={NutritionScreenStyles.container}>
            <View style={NutritionScreenStyles.topContainer}> 
                <Text style={{fontSize: 30}}>Nutrition Page</Text>
            </View>
            {products.productList.length === 0 ? (
                <View style={NutritionScreenStyles.middleContainer}>
                    <Text style={{fontSize: 30}}>No list present</Text>
                </View>
            ) : (
                <View style={NutritionScreenStyles.middleContainer}>
                    <ScrollView>
                        {products.productList.map((product, index) => (
                            <View key={index} style={NutritionScreenStyles.productContainer}>
                                <Text style={NutritionScreenStyles.productName}>
                                    {product.product_name[0].toUpperCase() + product.product_name.slice(1)}
                                </Text>
                                <Text style={NutritionScreenStyles.product}>
                                    Brand Name: {product.brand_name}
                                </Text>
                                <View style={NutritionScreenStyles.ingredientsContainer}>
                                    <Text>
                                        Ingredients: {`${product.ingredients}`}
                                    </Text>
                                </View>
                                <View style={NutritionScreenStyles.nutritionContainer}>
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
                <View style={NutritionScreenStyles.footerContainer}>
                    <View styles={NutritionScreenStyles.buttonContainer}></View>
                    <TouchableOpacity title="Look at Recipes" style={NutritionScreenStyles.button} onPress={() => 
                        {
                            getRecipeList()
                        }}>
                            <Text style={NutritionScreenStyles.buttonText}>Look at Recipes</Text>
                    </TouchableOpacity>
                    
                    <NavigationBar />
                </View>
            </View>
        )
    }


export default NutritionScreen