import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { registerWithEmailAndPassword } from '../firebase/firebaseConfig'
import { RegisterScreenStyles, TextStyles, buttonStyles, containerStyles } from '../styles/stylesheet';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <KeyboardAvoidingView
            style={RegisterScreenStyles.container}
            behavior= "padding"       
        >
            <View style={RegisterScreenStyles.topContainer}> 
                <Text style={TextStyles.title}>Register</Text>
            </View>

            <View style={RegisterScreenStyles.middleContainer}>
                <View style={RegisterScreenStyles.inputContainer}>
                    <Text style={RegisterScreenStyles.inputHeader}>Name</Text>
                    <TextInput 
                        placeholder="Name"
                        value={name}
                        onChangeText={text => setName(text)}
                        style={RegisterScreenStyles.input}
                    />
                    <Text style={RegisterScreenStyles.inputHeader}>Email</Text>
                    <TextInput 
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={RegisterScreenStyles.input}
                    />
                    <Text style={RegisterScreenStyles.inputHeader}>Password</Text>
                    <TextInput 
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={RegisterScreenStyles.input}
                        secureTextEntry
                    />
                </View>

                <View style={containerStyles.buttonContainer}>
                    
                    <TouchableOpacity
                        onPress={() => registerWithEmailAndPassword(name, email, password)}
                        style={[buttonStyles.button, buttonStyles.buttonOutline]}
                    >
                        <Text style={buttonStyles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={RegisterScreenStyles.footContainer}> 
            
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen