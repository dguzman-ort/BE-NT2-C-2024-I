import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TextInput } from 'react-native';
import { Input } from '@rneui/themed';
import contactService from '../services/contacts';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ContactFormScreen({ route }) {

  const navigation = useNavigation()

  const { id } = route.params || {}
  const [newContact, setNewContact] = useState({})
  const [formError, setFormError] = useState({})


  useEffect(() => {

    if(id){
      navigation.setOptions({ title: 'Editar Contacto'})
      contactService.getContactById(id).then(contact => {
        console.log(contact.age);
        setNewContact(contact)
      })
    }else{
      navigation.setOptions({ title: 'Agregar Contacto'})
    }

  }, [])

  

  const handleInput = (name, value) => {
    setNewContact({ ...newContact, [name]: value})
    setFormError({ ...formError, [name]: value.length === 0})
  }

  const handleSubmit = () => {
    console.log(newContact);


    if (!newContact.fullName){
      setFormError({...formError, fullName: true})      
      return
    }


    const isNewContact = !id

    if (isNewContact){
      contactService.createContact(newContact).then(() => {
        navigation.navigate('PantallaHome')
      })
      .catch(err => {
        console.log(err)
      })
    }else{
      contactService.updateContact(id, newContact).then(() => {
        navigation.navigate('PantallaHome')
      })
      .catch(err => {
        console.log(err)
      })
    }
    


    
  }

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <Input
          placeholder='Nombre Completo'
          value={newContact.fullName}
          onChangeText={(value) => handleInput('fullName', value)}
          errorMessage={formError.fullName ? 'Campo requerido' : null}
          style={styles.input}
        />
        <Input
          placeholder='Edad'
          value={String(newContact.age)}
          onChangeText={(value) => handleInput('age', value)}
          style={styles.input}
        />
        <Input
          placeholder='Telefono'
          value={newContact.phone}
          onChangeText={(value) => handleInput('phone', value)}
          style={styles.input}
        />
        <Button title="Guardar" onPress={handleSubmit} />
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
  form: {
    padding: 20
  },
  input:{
    height: 40,
    borderColor: 'grey',
    // borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
