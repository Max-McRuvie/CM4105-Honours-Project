import { Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

import { RecipeScreenStyles, TextStyles, containerStyles } from '../styles/stylesheet';

const RecipeIndivisualScreen = ({ route: { params: { recipe, instructions } } }) => {
    return (
      <View style={containerStyles.container}>
        <View style={RecipeScreenStyles.imageContainer}>
        <Image source={{uri: recipe.image}} style={RecipeScreenStyles.recipeImage}/> 
        </View>
            <View style={containerStyles.recipeContentContainer}>
            <ScrollView>
                    <Text style={TextStyles.recipeTitle}>{recipe.title}</Text>
                    <View style={RecipeScreenStyles.bubbleContainer}>
                        <Text style={TextStyles.header}>Ingredients</Text>
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
                        ))}
                    </View>
                    <View style={RecipeScreenStyles.bubbleContainer}>
                        <Text style={TextStyles.header}>Instructions</Text>
                        {instructions[0].steps.map((instruction, index) => (
                            <View key={index} style={RecipeScreenStyles.contentContainer}>
                                <Text style={TextStyles.text}>{index + 1}</Text>
                                <Text style={TextStyles.text}>{instruction.step}</Text>
                            </View>
                        )
                        )}
                    </View>
                    </ScrollView>
            </View>

        <View style={containerStyles.footerContainer}>
        </View>
      </View>
      
    );
}

export default RecipeIndivisualScreen
