import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationBar from '../components/NavigationBar'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}> 
                <Text style={{fontSize: 30}}>Profile</Text>
        </View>
        
        <View style={styles.middleContainer}>
        </View>
        <View style={styles.footerContainer}>
            <NavigationBar />
        </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        width: '80%',
        height: '30%',
        justifyContent: 'center',
        marginLeft: "10%",
    },
    middleContainer: {
        width: '80%',
        height: '60%',
        alignItems: 'center',
    },
    footContainer: {
        height: '30%',
    },
})