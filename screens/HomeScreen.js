import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { auth } from '../firebase/firebaseConfig'
import NavigationBar from '../components/NavigationBar'

const HomeScreen = () => {
    
    const [name, setName] = useState('')

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setName(authUser.displayName)
            }
        })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}> 
                    <Text style={{fontSize: 30}}>Hello {name}</Text>
            </View>
            
            <View style={styles.middleContainer}>

            </View>

            <View style={styles.footerContainer}>
                <NavigationBar />
            </View>
        </View>
    )
}

export default HomeScreen

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