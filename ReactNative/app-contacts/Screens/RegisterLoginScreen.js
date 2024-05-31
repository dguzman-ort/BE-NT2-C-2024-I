
import { useContext, useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Switch, KeyboardAvoidingView, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../services/AuthContext';
import authService from '../services/login';

export default function RegisterLoginScreen(){

    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre ] = useState('')
    const [esLogin, setEsLogin ] = useState(true)

    // const navigation = useNavigation()

    const { setAuthData } = useContext(AuthContext)

    const HandleLogin = () => {
        //TODO: Llamar al backend (o al servicio de autenticacion elegido) para obtener el token
        authService.login(email, password)
        .then((authData) => {
            setAuthData(authData)
        })
        .catch((error) => {
            alert(error)
        })

    }

    const HandleRegister = () =>{
        if( email && password ){
            alert(`${nombre} se ha registrado correctamente`)
            // navigation.navigate('PantallaHome')
        }else{
            alert('Registro Fallado, revisa los campos')
        }
    }

    const IrALogin = () => {
        setEsLogin(true)
    }

    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? "padding" : 'height'}
            style={styles.container}
        >
            <Text style={styles.title}>{esLogin ? "Login" : 'Registrarse'}</Text>
        {
            !esLogin && (
                <TextInput 
                style={ styles.input}
                placeholder='Ingrese su Nombre'
                value={nombre}
                onChangeText={setNombre}
            />)
        }

        <TextInput
            style={ styles.input}
            placeholder='Ingrese su Email'
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={ styles.input}
            placeholder='Ingrese su Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <View style={ styles.register }>
            {
                esLogin
                ?
                ( <Button title='Iniciar Sesion' onPress={HandleLogin}/> )
                :
                (
                <>
                <Button title={'Registrate'} onPress={HandleRegister}/>
                <Button title='Iniciar Sesion' onPress={IrALogin}/>
                </>
                )
            }
        </View>
            <Text>{esLogin ? 'Cambia a Registro' : 'Cambia a Login'}</Text>
            <Switch value={esLogin} onValueChange={setEsLogin} />
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    register:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    }
})