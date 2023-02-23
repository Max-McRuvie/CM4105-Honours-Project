import { StyleSheet } from 'react-native';

export const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: '8%',
    },
    topContainer: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        marginLeft: "10%",
        borderBottomWidth: 1,
        borderBottomColor: '#596407',

    },
    middleContainer: {
        width: '80%',
        height: '83%',
        alignItems: 'center',
        paddingLeft: '10%',
    },
    footContainer: {
        height: '10%',
    },
});

export const LoginScreenStyles = StyleSheet.create({
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

export const RegisterScreenStyles = StyleSheet.create({
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

export const NutritionScreenStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: '#c8baad',
        paddingTop: '5%',
    },
    topContainer: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        marginLeft: "10%",
        borderBottomWidth: 2,
        borderBottomColor: '#596407',
    },
    middleContainer: {
        width: '80%',
        height: '75%',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingTop: '10%',
    },
    footContainer: {
        height: '10%',
        backgroundColor: 'red',
    },
    productContainer: {
        width: '100%',
        height: 'auto',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#596407',
        borderRadius: 10,
        padding: 10,
    },
    productName: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        borderBottomWidth: 1,
        borderBottomColor: '#596407',
    },
    product: {
        paddingLeft: 10,
    },     
    ingredientsContainer: {
        paddingLeft: 10,
    }, 
    nutritionContainer: {
        paddingLeft: 10,
    },
    button: {
        width: '30%',
        height: 'auto',
        backgroundColor: '#596407',
        marginBottom: '5%',
        marginLeft: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
    }
})

export const RecipeListScreenStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: '5%',
    },
    topContainer: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        marginLeft: "10%",
        borderBottomWidth: 2,
        borderBottomColor: '#596407',
    },
    middleContainer: {
        width: '100%',
        height: '83%',
        paddingLeft: '5%',
    },
    footContainer: {
        height: '10%',
    },
    recipeListContainer: {
        width: '95%',
        height: 120,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 10,
        padding: 10,
    },
    recipeContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    recipeId: {
        fontSize: 20,
    },
    recipeName: {
        fontSize: 20,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
    }
})

export const RecipeScreenStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        width: '100%',
        height: '37%',
        justifyContent: 'center',
    },
    middleContainer: {
        width: '100%',
        height: '68%',
        paddingLeft: '5%',
    },
    footContainer: {
        height: '30%',
    },
    recipeImage: {
        width: '100%',
        height: '100%',
    },
    ingredientContainer: {
        margin: '1%',
        marginRight: '5%',
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ingredientName: {
        fontSize: 15,
          
    }
});

