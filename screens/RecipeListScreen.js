import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeScreen = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext)

    // Assign the recipe list context to a variable for easier access
    const recipeContext = context.recipeListState

    

    console.log(recipeContext.recipeList)

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={{ fontSize: 30 }}>Recipes Page</Text>
        </View>
        {recipeContext.recipeList.length === 0 ? (
            <View style={styles.middleContainer}>
                <Text style={{fontSize: 30, paddingLeft: '5%'}}>No items have been searched</Text>
            </View>
        ) : (
            <View style={styles.middleContainer}>
                <ScrollView>
                    {recipeContext.recipeList[0].map((recipe, index) => (
                        <View key={index} style={styles.recipeListContainer}>
                            <TouchableOpacity onPress={() => {navigation.navigate('Recipe', recipe)}} style={styles.recipeContainer}>
                                <View>
                                     <Text style={styles.recipeName}>
                                        {recipe.title}
                                    </Text>
                                    <Image source={{uri: recipe.image}} style={styles.image} />   
                                </View>
                                
                            </TouchableOpacity>
                            </View>
                    ))}
                </ScrollView>
            </View>
        )}

        <View style={styles.footerContainer}>
                    <NavigationBar />
                </View>
      </View>
      
    );
}

export default RecipeScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        width: '80%',
        height: '10%',
        marginTop: '20%',
        justifyContent: 'center',
        marginLeft: "10%",
    },
    middleContainer: {
        width: '100%',
        height: '68%',
        paddingLeft: '5%',
    },
    footContainer: {
        height: '30%',
    },
    recipeListContainer: {
        width: '95%',
        height: 150,
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: 'lightgrey',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
    },
    recipeContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    recipeId: {
        fontSize: 20,
    },
    recipeName: {
        fontSize: 20,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
    }
})