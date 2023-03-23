import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React, {useState, useEffect, useContext, useMemo} from 'react'
import { auth } from '../firebase/firebaseConfig'
import { containerStyles, TextStyles, RecipeScreenStyles } from '../styles/stylesheet'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getFavourites } from '../firebase/firebaseConfig'
  
const HomeScreen = ({navigation}) => {
    const [name, setName] = useState('')
    const [fav, setFav] = useState([])
    
    useEffect(() => {
        const usersName = async () => {
            const user = await auth.currentUser
            setName(user.displayName)
        }
        usersName()
    }, [])

    useEffect(() => {
        const Favourites = async () => {
            const favourites = await getFavourites()
            setFav(favourites)
        }
        Favourites()
    }, [])
   console.log(fav)

   const FavouriteRecipes = async () => {
        let fav = await getFavourites()
        console.log(fav)
        navigation.navigate('FavouriteScreen', {favourites: fav})
    }  


    return (
        <View style={containerStyles.container}>
            <View style={containerStyles.topContainer}> 
                    <Text style={TextStyles.title}>Hi {name || 'New User'}</Text>
            </View>
            
            <View style={[containerStyles.middleContainer, {margin: 0}]}>
            <View style={[RecipeScreenStyles.bubbleContainer, {width: "120%"}]}>
                <Text style={[TextStyles.headerUnderline, {color: '#000'}]}>
                    The App
                </Text>
                <Text style={[TextStyles.text, {color: '#000'}]}>
                    Welcome to NutriScan - where eating healthy has never been easier! Our barcode scanner allows you to effortlessly discover the nutritional value of any food item, helping you make informed decisions about what you eat. With our recipe search feature, finding tasty meals that include the ingredients you love has never been simpler. Join our community of health-conscious foodies and start your journey towards a healthier you today!
                </Text>
            </View>
                <Text style={[TextStyles.text, {color: '#fff'}]}>
                    
                </Text>
                <View style={[RecipeScreenStyles.bubbleContainer, {width: "120%"}]}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={[TextStyles.headerUnderline, {color: '#000'}]}>
                            Favourite Recipes
                        </Text>
                        <Pressable style={[TextStyles.text, {color: '#000'}]} onPress={() => {FavouriteRecipes()}}>
                            <Text style={[TextStyles.text, {color: '#000', paddingTop: '1%'}]}>
                                View All
                            </Text>
                        </Pressable>
                    </View>
                    
                </View>

            </View>

            <View style={containerStyles.footerContainer}>
                
            </View>
        </View>
    )
}

export default HomeScreen