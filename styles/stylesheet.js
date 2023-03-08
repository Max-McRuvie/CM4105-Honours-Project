import { StyleSheet } from 'react-native';

export const containerStyles = StyleSheet.create({
    //#1670e7 Old
    // #177cf9 New
    // #2c7be1 Currently used
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#2c7be1',
    },
    topContainer: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        backgroundColor: '#2c7be1',
        paddingLeft: '5%',
        paddingTop: '5%',
    },
    middleContainer: {
        width: '80%',
        height: '100%',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingTop: '5%',
    },
    listContainer:{
        width: '100%',
        height: '90%',
        alignItems: 'center',
        paddingTop: '5%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
    },
    recipeContentContainer: {
        width: '100%',
        height: '70%',
        paddingLeft: '5%',
        paddingTop: '5%',
        backgroundColor: '#fff',
    },
    footContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },
});

export const TextStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Inter-ExtraBold',
        color: '#fff',
    },
    recipeTitle: {
        fontSize: 30,
        fontFamily: 'Inter-ExtraBold',
        color: '#000',
    },
    header: {
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: '#000',
    },
    headerUnderline: {
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: '#000',
        borderBottomWidth: 2,
        borderBottomColor: '#4375b1',
    },
    subHeader: {
        fontSize: 15,
        fontFamily: 'Inter-ExtraBold',
        color: '#000',
    },
    text: {
        fontSize: 15,
        fontFamily: 'Inter-Bold',
        color: '#000',
    },
    listHeader: {
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    listText: {
        fontSize: 15,
        fontFamily: 'Inter-Bold',
        color: '#4375b1',
    },
})

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderRadius: 10,
        padding: 5,
        borderColor: '#0782F9',
        alignItems: 'center',
        borderWidth: 2,
        elevation: 5,
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
    removeButton: {
        width: '50%',
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#0782F9',
        backgroundColor: '#fff',
        marginLeft: '25%',
        marginTop: '5%',
        alignItems: 'center',
    }

})


export const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#2c7be1'
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
        width: '80%',
        marginTop: 50,
    },
    // Inputs
    inputHeader: {
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: '#fff',
        marginTop: '5%',
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
        borderBottomColor:"#fff",
        color: '#fff',
        fontFamily: 'Inter-ExtraBold',
        textAlign: 'left',
        'input::placeholder': {
            color: '#000',
        },
    },
    // Forgot Password
    forgotPasswordContainer: {
        width: '80%',
        marginTop: 10
    },
    forgotPassword: {
        textAlign: 'right',
        color: '#fff',
    },
})

export const RegisterScreenStyles = StyleSheet.create({
    // Screen Containers
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#2c7be1'
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
        marginTop: 50,
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: '#fff',
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
        borderBottomColor:"#fff",
        color: '#fff',
        fontFamily: 'Inter-ExtraBold',
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
    // Forgot Password
    forgotPasswordContainer: {
        width: '80%',
        marginTop: 10
    },
    forgotPassword: {
        textAlign: 'right'
    },
})

export const NutritionScreenStyles = StyleSheet.create({
    productContainer: {
        width: '95%',
        height: 'auto',
        marginBottom: "5%",
        padding: '5%',
        backgroundColor: '#e1eeff',
        borderRadius: 30,
        elevation: 5, 
        flex: 1
    },     
    contentContainer: {
    },
})

export const RecipeListScreenStyles = StyleSheet.create({
    recipeListContainer: {
        width: '95%',
        height: 120,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 10,
        padding: 10,
        // #ebf4fb Possible new color
        backgroundColor: '#e1eeff',
        borderRadius: 10,
        elevation: 5,
    },
    recipeContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    textContainer: {
        width: '60%', 
        paddingLeft: '2%'
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
    }
})

export const RecipeScreenStyles = StyleSheet.create({
    imageContainer: {
        height: '30%',
        width: '100%',
        marginRight: '5%',
    },
    recipeImage: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        margin: '1%',
        marginRight: '5%',
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bubbleContainer: {
        padding: 10,
        backgroundColor: '#e1eeff',
        borderRadius: 10,
        elevation: 5,
        width: '95%',
        marginTop: '2%',
        marginBottom: '2%',
    },
});

export const ProfileScreenStyles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        marginTop: 10,
        width: '100%',
    },
    input:{
        backgroundColor: '#fff',
        color: '#000',
        paddingLeft: '2%',
        borderRadius: 10,
    }
    
})

