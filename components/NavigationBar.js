import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        {/* Home Button */}
        <TouchableOpacity style={styles.iconBackground} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
          <Image source={require('./images/HomeIcon.png')} style={styles.ImageIconStyle} />
        </TouchableOpacity>
        {/* Nutrition Button */}
        <TouchableOpacity style={styles.iconBackground} activeOpacity={0.5} onPress={() => navigation.navigate('Nutrition')}>
          <Image source={require('./images/NutritionIcon.png')} style={styles.ImageIconStyle} />
        </TouchableOpacity>
        {/* Camera Button */}
        <TouchableOpacity style={styles.iconBackground} activeOpacity={0.5} onPress={() => navigation.navigate('BarcodeScanner')}>
          <Image source={require('./images/CameraIcon.png')} style={styles.ImageIconStyle} />
        </TouchableOpacity>
        {/* Recipe Button */}
        <TouchableOpacity style={styles.iconBackground} activeOpacity={0.5} onPress={() => navigation.navigate('RecipesList')}>
          <Image source={require('./images/RecipeIcon.png')} style={styles.ImageIconStyle} />
        </TouchableOpacity>
        {/* Profile Button */}
        <TouchableOpacity style={styles.iconBackground} activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./images/ProfileIcon.png')} style={styles.ImageIconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

{/* <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
    <Image
     source={require('./Images/facebook.png')}
     style={styles.ImageIconStyle}
    />
    <View style={styles.SeparatorLine} />
    <Text style={styles.TextStyle}> Login Using Facebook </Text>
</TouchableOpacity> */}

export default NavigationBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  navigationContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  iconBackground: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 0,
    height: 50,
  },
  ImageIconStyle: {
    height: 45,
    width: 50,
    resizeMode: 'stretch',
  },
})