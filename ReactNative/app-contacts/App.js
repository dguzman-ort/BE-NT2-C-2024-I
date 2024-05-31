
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import RegisterLoginScreen from './Screens/RegisterLoginScreen';
import DetailScreen from './Screens/DetailScreen';
import ContactFormScreen from './Screens/ContactFormScreen';
import { useEffect, useState } from 'react';
import AuthContextGlobal, { defaultAuthData } from './services/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from './Screens/SettingScreen';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from './services/AsyncStorage';
// import ContactFormScreen from './Screens/contactFormScreen.js';


const NestedNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='PantallaHome' component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false

        }} />
      <Stack.Screen name='Details' component={DetailScreen} options={{
        title: 'Detalle',
        headerBackTitle: 'Volver',
        headerBackTitleVisible: false
      }} />
      <Stack.Screen name='ContactFormScreen' component={ContactFormScreen} options={{
        title: '',
        headerBackTitleVisible: false
      }} />
    </Stack.Navigator>
  )
}


const HomeNavigation = () => {
  const BottomTab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        }
      }}>

        <BottomTab.Screen name='Home' component={NestedNavigation}
          options={{
            title: 'Home',
            headerShown: false

          }}
        />
        <BottomTab.Screen name='Settings' component={SettingScreen} options={{
          headerBackTitleVisible: false
        }} />

      </BottomTab.Navigator>
    </NavigationContainer>
  )


}

export default function App() {

  const [authData, setAuthData] = useState(defaultAuthData)

  useEffect(() => {
    // Necesitamos al levantar la app que exista usuario logueado
    AsyncStorage.getData('authData')
      .then(data => {
        console.log("Encontro algo???", data)
        if (data) {
          setAuthData(data)
        }
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (authData) {
        console.log('Usuario logueado')
        AsyncStorage.storeData('authData', authData)
      } else {
        console.log('Usuario deslogueado')
        AsyncStorage.clearAll()
      }
    });

  }, [authData])

  return (
    <AuthContextGlobal.Provider value={{ authData, setAuthData }}>
      {
        authData ?
          <HomeNavigation />
          :
          <RegisterLoginScreen />
      }
    </AuthContextGlobal.Provider>

  )
}