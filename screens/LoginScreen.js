import { useEffect } from 'react'
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { loginInWithEmailAndPassword } from '../firebase/firebaseApi.js'
import { LoginScreenStyles, TextStyles, containerStyles, buttonStyles } from '../styles/stylesheet';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    return (
        <KeyboardAvoidingView
            style={LoginScreenStyles.container}
            behavior= "height"       
        >
            <View style={LoginScreenStyles.topContainer}> 
                <Text style={TextStyles.title}>Log-in</Text>
            </View>

            <View style={LoginScreenStyles.middleContainer}>
                <View style={LoginScreenStyles.inputContainer}>
                    <Text style={LoginScreenStyles.inputHeader}>Email</Text>
                    <TextInput 
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={LoginScreenStyles.input}
                    />
                    <Text style={LoginScreenStyles.inputHeader}>Password</Text>
                    <TextInput 
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={LoginScreenStyles.input}
                        secureTextEntry
                    />
                </View>

                <View style={LoginScreenStyles.forgotPasswordContainer}>
                    <TouchableOpacity style={LoginScreenStyles.forgotPassword}> 
                        <Text style={LoginScreenStyles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={containerStyles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => loginInWithEmailAndPassword(email, password)}
                        style={buttonStyles.button}
                    >
                        <Text style={buttonStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={[buttonStyles.button, buttonStyles.buttonOutline]}
                    >
                        <Text style={buttonStyles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={LoginScreenStyles.footContainer}> 
            
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
