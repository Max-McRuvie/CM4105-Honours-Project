import { Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext';
import { RecipeListScreenStyles, containerStyles, TextStyles } from '../styles/stylesheet';

import { getRecipeInstructions } from '../apis/SpoonacularApi.js'

const RecipeScreen = ({navigation}) => {
    const context = useContext(AppContext)

    // Assign the recipe list context to a variable for easier access
    const recipeContext = context.recipeListState

    const getInstructions = async (navigation, recipe) => {
        let instructions = await getRecipeInstructions(recipe.id)
        // console.log(recipeResponse)
        // update the product list context with the new product
        navigation.navigate('RecipeScreen', {
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
                            <Pressable onPress={() => {getInstructions(navigation, recipe)}} style={RecipeListScreenStyles.recipeContainer}>
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
                            </Pressable>
                            </View>
                    ))}
                </ScrollView>
            </View>
        )}

        <View style={containerStyles.footerContainer}>
         
        </View>
      </View>
      
    );
}

export default RecipeScreen