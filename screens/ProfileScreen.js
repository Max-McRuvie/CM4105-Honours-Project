import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { auth } from '../firebase/firebaseConfig'
import { containerStyles, TextStyles, buttonStyles } from '../styles/stylesheet'

const ProfileScreen = () => {
  return (
    <View style={containerStyles.container}>
        <View style={containerStyles.topContainer}> 
                <Text style={TextStyles.title}>Profile</Text>
        </View>
        
        <View style={containerStyles.middleContainer}>
            <Button title="Logout" style={buttonStyles.button} onPress={() => auth.signOut()} />
        </View>
        <View style={containerStyles.footerContainer}>
            <NavigationBar />
        </View>
    </View>
  )
}

export default ProfileScreen