import { Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext';
import { RecipeListScreenStyles, containerStyles, TextStyles } from '../styles/stylesheet';
import { isFavouriteCheck } from '../firebase/firebaseConfig'

import { getRecipeInformation,  } from '../apis/SpoonacularApi.js'

const RecipeScreen = ({navigation}) => {
    const context = useContext(AppContext)

    // Assign the recipe list context to a variable for easier access
    const recipeContext = context.recipeListState
    // console.log(context.recipeListState.recipeList)

    const getInformation = async (recipe) => {
        let recipeInformation = await getRecipeInformation(recipe.id)
        // Is Fav works with the recipe id, image and title from recipeInformation API, as it is different
        // to the recipe id, image and title from the API used on the NutritionScreen
        let isFav = await isFavouriteCheck(recipeInformation.id, recipeInformation.image, recipeInformation.title)

        navigation.navigate('RecipeScreen', {
            recipe: recipeInformation,
            isFav: isFav
        })
    }

    let error;
    if (recipeContext.recipeList.length === 0) {
        error = 'No items have been searched'
    } else if (recipeContext.recipeList.results.length < 1){
        error ='No recipes found'
    }

    return (
      <View style={containerStyles.container}>
        <View style={containerStyles.topContainer}>
          <Text style={TextStyles.title}>Recipes Page</Text>
        </View>
        {error ? (
            <View style={containerStyles.listContainer}>
                <Text style={TextStyles.header}>{error}</Text>
            </View>
        ) : (
            <View style={containerStyles.listContainer}>
                <ScrollView>
                    {recipeContext.recipeList.results.map((recipe, index) => (
                        <View key={index} style={RecipeListScreenStyles.recipeListContainer}>
                            <Pressable onPress={() => {getInformation(recipe)}} style={RecipeListScreenStyles.recipeContainer}>
                                <Image source={{uri: recipe.image}} style={RecipeListScreenStyles.image} resizeMode='contain' />
                                <View style={RecipeListScreenStyles.textContainer}>
                                    <Text style={TextStyles.subHeader}>
                                        {recipe.title}
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