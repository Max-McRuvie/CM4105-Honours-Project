import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { auth } from '../firebase/firebaseConfig'
import NavigationBar from '../components/NavigationBar'

const HomeScreen = () => {
    
    const [name, setName] = useState('')


    // FIXME: Users name is not displayed on initial load
    useEffect(() => {
        const usersName = async () => {
            const user = await auth.currentUser
            setName(user.displayName)
        }
        usersName()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}> 
                    <Text style={{fontSize: 30}}>Welcome {name || ''}</Text>
            </View>
            
            <View style={styles.middleContainer}>
                <Text style={{fontSize: 15}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet iaculis augue, vitae tempus ligula. Curabitur luctus imperdiet est, vitae accumsan elit posuere in. Phasellus quis malesuada odio. Curabitur cursus ut massa ac auctor. Nunc vitae sapien non lacus molestie egestas. Curabitur consequat, nibh et eleifend suscipit, nisi nisi condimentum eros, non congue nulla quam non ipsum. Phasellus ornare nisi at dui porttitor, non ultricies turpis volutpat. Vestibulum et consequat odio.
                </Text>
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
        paddingLeft: '10%',
    },
    footContainer: {
        height: '30%',
    },
    button: {
        height: 20,
        width: 20,
    }
})