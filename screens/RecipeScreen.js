import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeIndivisualScreen = (prop) => {
    const navigation = useNavigation();
    const recipe = prop.route.params

    console.log(recipe)

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
        <Image source={{uri: recipe.image}} style={styles.recipeImage} resizeMode='contain'/> 
        </View>
        <View style={styles.middleContainer}>
            <Text style={{fontSize: 30 }}>{recipe.title}</Text>
            <Text style={{fontSize: 20, paddingTop: '5%'}}>Ingredients</Text>
            {recipe.missedIngredients.map((ingredient, index) => (
                    <View key={index} style={styles.ingredientContainer}>
                        <Text style={styles.ingredientName}>{ingredient.name}</Text> 
                        <Text style={styles.ingredientName}>{ingredient.amount} {ingredient.unit}</Text>
                    </View>
            ))}
            {recipe.usedIngredients.map((ingredient, index) => (
                    <View key={index} style={styles.ingredientContainer}>
                        <Text style={styles.ingredientName}>{ingredient.name}</Text> 
                        <Text style={styles.ingredientName}>{ingredient.amount} {ingredient.unit}</Text>
                    </View>
            ))}
            <Text style={{fontSize: 20, paddingTop: '5%'}}>Instructions</Text>
            

        </View>

        <View style={styles.footerContainer}>
                    <NavigationBar />
                </View>
      </View>
      
    );
}

export default RecipeIndivisualScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        width: '100%',
        height: '37%',
        justifyContent: 'center',
    },
    middleContainer: {
        width: '100%',
        height: '68%',
        paddingLeft: '5%',
    },
    footContainer: {
        height: '30%',
    },
    recipeImage: {
        width: '100%',
        height: '100%',
    },
    ingredientContainer: {
        margin: '1%',
        marginRight: '5%',
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ingredientName: {
        fontSize: 15,
          
    }

})