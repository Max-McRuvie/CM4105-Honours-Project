import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { auth } from '../firebase/firebaseConfig'
import NavigationBar from '../components/NavigationBar'
import { containerStyles } from '../styles/stylesheet'

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
        <View style={containerStyles.container}>
            <View style={containerStyles.topContainer}> 
                    <Text style={{fontSize: 30}}>Welcome {name || ''}</Text>
            </View>
            
            <View style={containerStyles.middleContainer}>
                <Text style={{fontSize: 15}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet iaculis augue, vitae tempus ligula. Curabitur luctus imperdiet est, vitae accumsan elit posuere in. Phasellus quis malesuada odio. Curabitur cursus ut massa ac auctor. Nunc vitae sapien non lacus molestie egestas. Curabitur consequat, nibh et eleifend suscipit, nisi nisi condimentum eros, non congue nulla quam non ipsum. Phasellus ornare nisi at dui porttitor, non ultricies turpis volutpat. Vestibulum et consequat odio.
                </Text>
            </View>

            <View style={containerStyles.footerContainer}>
                <NavigationBar />
            </View>
        </View>
    )
}

export default HomeScreen