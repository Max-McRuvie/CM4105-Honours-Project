import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RecipeListScreenStyles, containerStyles, TextStyles } from '../styles/stylesheet';

import { getRecipeInstructions } from '../apis/SpoonacularApi.js'

const RecipeScreen = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext)

    // Assign the recipe list context to a variable for easier access
    const recipeContext = context.recipeListState
    console.log(recipeContext.recipeList)
    console.log('jeff')

    const getInstructions = async (recipe) => {
        let instructions = await getRecipeInstructions(recipe.id)
        // console.log(recipeResponse)
        // update the product list context with the new product
        navigation.navigate('Recipe', {
            recipe: recipe,
            instructions: instructions
        })
    }

    return (
      <View style={containerStyles.container}>
        <View style={containerStyles.topContainer}>
          <Text style={TextStyles.title}>Recipes Page</Text>
        </View>
        {recipeContext.recipeList.length === 0 ? (
            <View style={containerStyles.listContainer}>
                <Text style={TextStyles.header}>No items have been searched</Text>
            </View>
        ) : (
            <View style={containerStyles.listContainer}>
                <ScrollView>
                    {recipeContext.recipeList.map((recipe, index) => (
                        <View key={index} style={RecipeListScreenStyles.recipeListContainer}>
                            <TouchableOpacity onPress={() => {getInstructions(recipe)}} style={RecipeListScreenStyles.recipeContainer}>
                                <Image source={{uri: recipe.image}} style={RecipeListScreenStyles.image} resizeMode='contain' />
                                <View style={RecipeListScreenStyles.textContainer}>
                                    <Text style={TextStyles.subHeader}>
                                        {recipe.title}
                                    </Text>
                                    <Text style={TextStyles.listText}>
                                        usedIngredientCount: {recipe.usedIngredientCount}
                                    </Text>
                                    <Text style={TextStyles.listText}>
                                        missedIngredientCount: {recipe.missedIngredientCount}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                    ))}
                </ScrollView>
            </View>
        )}

        <View style={containerStyles.footerContainer}>
                    <NavigationBar />
                </View>
      </View>
      
    );
}

export default RecipeScreen