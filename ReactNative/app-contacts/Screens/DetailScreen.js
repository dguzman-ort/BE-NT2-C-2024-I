import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TextInput } from 'react-native';
import contactService from '../services/contacts';
import { useEffect, useState } from 'react';
import ContactFlatList from '../components/ContactFlatList';
import Contact from '../components/Contact';
import { useNavigation } from '@react-navigation/native';

export default function DetailScreen({ route }) {

  const navigation = useNavigation()

  const { id } = route.params
  const [contact, setContact] = useState({})
  

  

  useEffect(() => {
    contactService.getContactById(id).then(contacts => {
      setContact(contacts)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const handleEdit = () => {
    console.log('Editar')
    navigation.navigate('ContactFormScreen', { id })
    
  }

  const handleDelete = () => {
    
    contactService.deleteContact(id).then((res) => {
      navigation.navigate('PantallaHome')
    })
    .catch(err => {
      console.log(err)
    })  
  }

  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />
        {
          contact.id ? (
            <View>
              <Contact contact={contact} />
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Button title="Editar" onPress={handleEdit} />
                <Button title="Eliminar" onPress={handleDelete} />
              </View>
            </View>
          ) : (
            <Text>Cargando...</Text>
          )
        }
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    padding: 20
  },
  input:{
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }

});
