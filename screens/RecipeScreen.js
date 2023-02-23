import { RecipeScreenStylesheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { RecipeScreenStyles } from '../styles/stylesheet';

const RecipeIndivisualScreen = (prop) => {
    const navigation = useNavigation();
    const recipe = prop.route.params.recipe
    const instructions = prop.route.params.instructions;

    console.log('jeff')
    // instructions.map((instruction) => console.log(instruction.steps))
    //console.log(instructions[0].steps.map((instruction) => console.log(instruction)))
    console.log(instructions)

    return (
      <View style={RecipeScreenStyles.container}>
        <View style={RecipeScreenStyles.topContainer}>
        <Image source={{uri: recipe.image}} style={RecipeScreenStyles.recipeImage} resizeMode='contain'/> 
        </View>
        <View style={RecipeScreenStyles.middleContainer}>
            <Text style={{fontSize: 30 }}>{recipe.title}</Text>
            <Text style={{fontSize: 20, paddingTop: '5%'}}>Ingredients</Text>
            {recipe.missedIngredients.map((ingredient, index) => (
                    <View key={index} style={RecipeScreenStyles.ingredientContainer}>
                        <Text style={RecipeScreenStyles.ingredientName}>{ingredient.name}</Text> 
                        <Text style={RecipeScreenStyles.ingredientName}>{ingredient.amount} {ingredient.unit}</Text>
                    </View>
            ))}
            {recipe.usedIngredients.map((ingredient, index) => (
                    <View key={index} style={RecipeScreenStyles.ingredientContainer}>
                        <Text style={RecipeScreenStyles.ingredientName}>{ingredient.name}</Text> 
                        <Text style={RecipeScreenStyles.ingredientName}>{ingredient.amount} {ingredient.unit}</Text>
                    </View>
            ))}
            <Text style={{fontSize: 20, paddingTop: '5%'}}>Instructions</Text>
            {instructions[0].steps.map((instruction, index) => (
                <View key={index} style={RecipeScreenStyles.ingredientContainer}>
                    <Text style={RecipeScreenStyles.ingredientName}>{index + 1}</Text>
                    <Text style={RecipeScreenStyles.ingredientName}>{instruction.step}</Text>
                </View>
            )
            )}
            

        </View>

        <View style={RecipeScreenStyles.footerContainer}>
                    <NavigationBar />
                </View>
      </View>
      
    );
}

export default RecipeIndivisualScreen
