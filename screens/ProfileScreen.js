import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import { updateUserProfile } from '../firebase/firebaseApi.js'
import { auth } from '../firebase/firebaseConfig'
import { containerStyles, TextStyles, buttonStyles, LoginScreenStyles, ProfileScreenStyles } from '../styles/stylesheet'


const ProfileScreen = () => {
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [currentPassword, setCurrentPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  // Force update the component
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleUpdate = async () => {
    const message = await updateUserProfile(username, email, newPassword, currentPassword)
    console.log(message)
    if(message === "incorrect-password"){
      alert("Please enter current password correctly")
    } else {
      alert("Profile Updated")
      clearInputs()
      forceUpdate()
    }
  }

  const clearInputs = () => {
    setEmail('')
    setUsername('')
    setNewPassword('')
    setCurrentPassword('')
  }


  return (
    <View style={containerStyles.container}>
         <View style={containerStyles.topContainer}> 
                 <Text style={TextStyles.title}>Profile</Text>
        </View>
        
        <View style={containerStyles.middleContainer}>
          {/* Username Input */}
          <View style={ProfileScreenStyles.inputContainer}>
            <Text style={[TextStyles.subHeader, {color: '#fff'}]}>
              Username:
            </Text>
            <TextInput 
              placeholder= {auth.currentUser.displayName}
              value={username}
              onChangeText={text => setUsername(text)}
              style={ProfileScreenStyles.input}
            />
          </View>
          {/* Email Input */}
          <View style={ProfileScreenStyles.inputContainer}>
            <Text style={[TextStyles.subHeader, {color: '#fff'}]}>
                Email Address: 
            </Text>
            <TextInput 
              placeholder= {auth.currentUser.email}
              value={email}
              onChangeText={text => setEmail(text)}
              style={ProfileScreenStyles.input}
            />
          </View>
          {/* Current Password Input */}
          <View style={ProfileScreenStyles.inputContainer}>
            <Text style={[TextStyles.subHeader, {color: '#fff'}]}>
              Current Password:
            </Text>
            <TextInput
              placeholder="Current Password"
              value={currentPassword}
              onChangeText={text => setCurrentPassword(text)}
              style={ProfileScreenStyles.input}
              secureTextEntry
            />
          </View>
          {/* New Password Input */}
          <View style={ProfileScreenStyles.inputContainer}>
            <Text style={[TextStyles.subHeader, {color: '#fff'}]}>
              New Password:
            </Text>
            <TextInput
              placeholder="New Password"
              value={newPassword}
              onChangeText={text => setNewPassword(text)}
              style={ProfileScreenStyles.input}
              secureTextEntry
            />
          </View>
          {/* Update Button */}
          <View style={ProfileScreenStyles.inputContainer}>
            <Button title="Update" style={buttonStyles.button} onPress={() => {handleUpdate(), clearInputs()}} />
          </View>
          {/* Logout Button */}
          <View style={ProfileScreenStyles.inputContainer}>
            <Button title="Logout" style={buttonStyles.button} onPress={() => auth.signOut()} />
          </View>          
        </View>

    </View>
  )
}

export default ProfileScreen