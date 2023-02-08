import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React, {useContext} from 'react'
import NavigationBar from '../components/NavigationBar'
import {AppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeIndivisualScreen = (prop) => {
    const navigation = useNavigation();
    const recipe = prop.route.params

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={{ fontSize: 30 }}>{recipe.title}</Text>
        </View>
        <View style={styles.middleContainer}>
            <Image source={{uri: recipe.image}} style={{width: 100, height: 100}} /> 
            <Text> {}</Text>

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
        width: '80%',
        height: '10%',
        marginTop: '20%',
        justifyContent: 'center',
        marginLeft: "10%",
    },
    middleContainer: {
        width: '100%',
        height: '68%',
        paddingLeft: '10%',
    },
    footContainer: {
        height: '30%',
    },
})