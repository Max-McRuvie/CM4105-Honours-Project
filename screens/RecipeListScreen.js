import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RecipeListScreenStyles } from '../styles/stylesheet';

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
      <View style={RecipeListScreenStyles.container}>
        <View style={RecipeListScreenStyles.topContainer}>
          <Text style={{fontSize: 30}}>Recipes Page</Text>
        </View>
        {recipeContext.recipeList.length === 0 ? (
            <View style={RecipeListScreenStyles.middleContainer}>
                <Text style={{fontSize: 30, paddingLeft: '5%'}}>No items have been searched</Text>
            </View>
        ) : (
            <View style={RecipeListScreenStyles.middleContainer}>
                <ScrollView>
                    {recipeContext.recipeList.map((recipe, index) => (
                        <View key={index} style={RecipeListScreenStyles.recipeListContainer}>
                            <TouchableOpacity onPress={() => {getInstructions(recipe)}} style={RecipeListScreenStyles.recipeContainer}>
                                <Image source={{uri: recipe.image}} style={RecipeListScreenStyles.image} resizeMode='contain' />
                                <View style={{width: '60%', paddingLeft: '2%'}}>
                                    <Text style={RecipeListScreenStyles.recipeName}>
                                        {recipe.title}
                                    </Text>
                                    <Text style={{fontSize: 15, paddingTop: '5%'}}>
                                        usedIngredientCount: {recipe.usedIngredientCount}
                                    </Text>
                                    <Text style={{fontSize: 15}}>
                                        missedIngredientCount: {recipe.missedIngredientCount}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                    ))}
                </ScrollView>
            </View>
        )}

        <View style={RecipeListScreenStyles.footerContainer}>
                    <NavigationBar />
                </View>
      </View>
      
    );
}

export default RecipeScreen