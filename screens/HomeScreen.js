import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { auth } from '../firebase/firebaseConfig'
import { containerStyles, TextStyles } from '../styles/stylesheet'

const HomeScreen = () => {
    const [name, setName] = useState('')
    
    useEffect(() => {
        const usersName = async () => {
            const user = await auth.currentUser
            setName(user.displayName)
        }
        usersName()
    }, [])
    auth.currentUser.uid

    return (
        <View style={containerStyles.container}>
            <View style={containerStyles.topContainer}> 
                    <Text style={TextStyles.title}>Welcome {name || 'New User'}</Text>
            </View>
            
            <View style={containerStyles.middleContainer}>
                <Text style={[TextStyles.text, {color: '#fff'}]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet iaculis augue, vitae tempus ligula. Curabitur luctus imperdiet est, vitae accumsan elit posuere in. Phasellus quis malesuada odio. Curabitur cursus ut massa ac auctor. Nunc vitae sapien non lacus molestie egestas. Curabitur consequat, nibh et eleifend suscipit, nisi nisi condimentum eros, non congue nulla quam non ipsum. Phasellus ornare nisi at dui porttitor, non ultricies turpis volutpat. Vestibulum et consequat odio.
                </Text>
            </View>

            <View style={containerStyles.footerContainer}>
                
            </View>
        </View>
    )
}

export default HomeScreen