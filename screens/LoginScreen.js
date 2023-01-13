import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../firebase/firebaseConfig'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate('Home')
        } catch (err) {
            switch(err.code){
                case 'auth/invalid-email':
                    alert('Invalid email')
                    break;
                case 'auth/user-disabled':
                    alert('User disabled')
                    break;
                case 'auth/user-not-found':
                    alert('User not found')
                    break;
                case 'auth/wrong-password':
                    alert('Wrong password')
                    break;
                default:
                    console.log(err)
            }
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior= "height"       
        >
            <View style={styles.topContainer}> 
                <Text style={{fontSize: 30}}>Log-in</Text>
            </View>

            <View style={styles.middleContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Email</Text>
                    <TextInput 
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <Text style={styles.inputHeader}>Password</Text>
                    <TextInput 
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>

                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity style={styles.forgotPassword}> 
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => Login(email, password)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footContainer}> 
            
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    // Screen Containers
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },
    topContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        marginLeft: "20%",
    },
    middleContainer: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
    },
    footContainer: {
        height: '30%',
    },
    inputContainer: {
        width: '80%'
    },
    // Inputs
    inputHeader: {
        marginBottom: 0,
        paddingBottom: 0,
        fontSize: 20,
        marginTop: 50,
    },
    input: {
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingLeft: 0,
        borderRadius: 0,
        marginTop: 5,
        borderBottomWidth: 4,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderBottomColor:"#777676",
        color: '#000000',
        textAlign: 'left',
        'input::placeholder': {
            color: '#777676',
        },
    },
    // Buttons
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    // Button Text
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontSize: 16,
        fontWeight: '700'
    },
    // Forgot Password
    forgotPasswordContainer: {
        width: '80%',
        marginTop: 10
    },
    forgotPassword: {
        textAlign: 'right'
    },

})