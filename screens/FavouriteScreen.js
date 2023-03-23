import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native'
import { containerStyles, TextStyles, buttonStyles, RecipeListScreenStyles } from '../styles/stylesheet'
import { isFavouriteCheck } from '../firebase/firebaseConfig'
import {getRecipeInformation} from '../apis/SpoonacularApi.js'


const FavouriteScreen = ({route, navigation}) => {
    let favouriteList = route.params.favourites
    console.log(route.params)

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

    return (
    <View style={containerStyles.container}>
        {favouriteList[0].length > 1 ? (
            <View style={containerStyles.middleContainer}>
                <Text style={TextStyles.header}>No favourites saved</Text>
            </View>
        ) : (
            <View style={[containerStyles.middleContainer, {width: '100%', padding:'5%'}]}>
                <ScrollView>
                    {favouriteList.map((recipe, index) => (
                        <View key={index} style={[RecipeListScreenStyles.recipeListContainer, {width:'100%'}]}>
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
    )
}

export default FavouriteScreen