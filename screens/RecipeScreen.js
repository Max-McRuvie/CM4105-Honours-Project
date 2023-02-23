import { RecipeScreenStylesheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { RecipeScreenStyles, TextStyles, containerStyles } from '../styles/stylesheet';

const RecipeIndivisualScreen = (prop) => {
    const navigation = useNavigation();
    const recipe = prop.route.params.recipe
    const instructions = prop.route.params.instructions;

    console.log('jeff')
    // instructions.map((instruction) => console.log(instruction.steps))
    //console.log(instructions[0].steps.map((instruction) => console.log(instruction)))
    console.log(instructions)

    return (
      <View style={containerStyles.container}>
        <View style={RecipeScreenStyles.imageContainer}>
        <Image source={{uri: recipe.image}} style={RecipeScreenStyles.recipeImage}/> 
        </View>
        <View style={containerStyles.recipeContentContainer}>
            <Text style={TextStyles.recipeTitle}>{recipe.title}</Text>
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
            <Text style={TextStyles.header}>Instructions</Text>
            {instructions[0].steps.map((instruction, index) => (
                <View key={index} style={RecipeScreenStyles.contentContainer}>
                    <Text style={TextStyles.text}>{index + 1}</Text>
                    <Text style={TextStyles.text}>{instruction.step}</Text>
                </View>
            )
            )}
        </View>

        <View style={containerStyles.footerContainer}>
                    <NavigationBar />
                </View>
      </View>
      
    );
}

export default RecipeIndivisualScreen
