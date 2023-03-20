import { Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import {addFavoriteRecipe, removeFavoriteRecipe} from '../firebase/firebaseConfig'

import { RecipeScreenStyles, TextStyles, containerStyles } from '../styles/stylesheet';
const RecipeIndivisualScreen = ({ route: { params: { recipe, isFav } } }) => {

    const [isFavourite, updateIsFavourite] = useState(isFav)

    const changeFavourite = async () => {
        // await addFavoriteRecipe(recipe)
        if(!isFavourite) {
            updateIsFavourite(true)
            addFavoriteRecipe(recipe.id)
        } else {
            updateIsFavourite(false)
            removeFavoriteRecipe(recipe.id)
        }
    }

    return (
      <View style={containerStyles.container}>
        <View style={RecipeScreenStyles.imageContainer}>
        <Image source={{uri: recipe.image}} style={RecipeScreenStyles.recipeImage}/> 
        </View>
            <View style={containerStyles.recipeContentContainer}>
            <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[TextStyles.recipeTitle, {width: '80%', marginBottom: '2%'}]}>{recipe.title}</Text>
                        <Pressable style={RecipeScreenStyles.button}>
                            <Ionicons
                                style={{padding: '2%'}}
                                name= {isFavourite ? "heart" : "heart-outline"}
                                color="red"
                                onPress={() => { changeFavourite(), updateIsFavourite(!isFavourite)}}
                                size={30}
                            />
                        </Pressable>

                    </View>
                    <Text style={[TextStyles.subHeader, {width: '80%', marginBottom: '2%'}]}>Ready in {recipe.readyInMinutes} minutes</Text>
                    <Text style={[TextStyles.subHeader, {width: '80%', marginBottom: '2%'}]}>Serves: {recipe.servings}</Text>
                    <View style={RecipeScreenStyles.bubbleContainer}>
                        <Text style={TextStyles.header}>Summary</Text>
                            <View style={RecipeScreenStyles.contentContainer}>
                                <Text style={TextStyles.text}>{recipe.summary.replace(/<.*?>/g, '')}</Text>
                            </View>
                    </View>

                    <View style={RecipeScreenStyles.bubbleContainer}>
                        <Text style={TextStyles.header}>Ingredients</Text>
                        {recipe.extendedIngredients.map((ingredient, index) => (
                            <View key={index} style={[RecipeScreenStyles.contentContainer, {flexDirection: 'row'}]}>
                                <Text style={TextStyles.text}>- {ingredient.original}</Text>
                            </View>
                        ))}

                        {/* <Text style={TextStyles.header}>Ingredients</Text>
                        {recipe.missedIngredients.map((ingredient, index) => (
                                <View key={index} style={RecipeScreenStyles.contentContainer}>
                                    <Text style={TextStyles.text}>{ingredient.name}</Text> 
                                    <Text style={TextStyles.text}>{ingredient.amount} {ingredient.unit}</Text>
                                </View>
                        ))}
                        {recipe.usedIngredients.map((ingredient, index) => (
                                <View key={index} style={RecipeScreenStyles.contentContainer}>
                                    <Text style={TextStyles.text}>{ingredient.name}</Text> 
                                    <Text style={TextStyles.text}>{ingredient.amount} {ingredient.unit}</Text>
                                </View>
                        ))} */}
                    </View>
                    <View style={RecipeScreenStyles.bubbleContainer}>
                        <Text style={TextStyles.header}>Instructions</Text>
                        {recipe.analyzedInstructions[0].steps.map((instruction, index) => (
                            
                            <View key={index} style={[RecipeScreenStyles.contentContainer, {flexDirection: 'column'}]}>
                                <Text style={[TextStyles.subHeader, {borderBottomWidth: 1, width: "18%", marginBottom: '2%'}]}>{`Step ${index + 1}:`}</Text>
                                <Text style={TextStyles.text}>{`${instruction.step}`}</Text>
                            </View>

                         ))}

                    </View>
                    </ScrollView>
            </View>

        <View style={containerStyles.footerContainer}>
        </View>
      </View>
      
    );
}

export default RecipeIndivisualScreen
