import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <>
        <View style={styles.topContainer}> 
                <Text style={{fontSize: 30}}>Hello [Insert Name]</Text>
        </View>
        
        <View style={styles.middleContainer}>

        </View>

        <View style={styles.footerContainer}>

        </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },
    topContainer: {
        width: '80%',
        height: '30%',
        justifyContent: 'center',
        marginLeft: "10%",
    },
    middleContainer: {
        width: '80%',
        height: '30%',
        alignItems: 'center',
    },
    footContainer: {
        height: '30%',
    },
})