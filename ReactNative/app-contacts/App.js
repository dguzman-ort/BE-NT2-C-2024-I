
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import RegisterLoginScreen from './Screens/RegisterLoginScreen';
import DetailScreen from './Screens/DetailScreen';
import ContactFormScreen from './Screens/ContactFormScreen';
// import ContactFormScreen from './Screens/contactFormScreen.js';


const Stack = createStackNavigator()



export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PantallaHome'>
        <Stack.Screen name='PantallaHome' component={HomeScreen} options={{
          title: 'Listado de Contactos',
          headerShown: false
        
        }} />
        <Stack.Screen name='Details' component={DetailScreen} options={{
          title: 'Detalle',
          headerBackTitle: 'Volver',
          headerBackTitleVisible: false
        }}/>
        <Stack.Screen name='ContactFormScreen' component={ContactFormScreen} options={{
          title: '',
          headerBackTitleVisible: false
        
        }} />
        <Stack.Screen name='RegisterLogin' component={RegisterLoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}