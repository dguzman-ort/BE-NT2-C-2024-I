import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TextInput } from 'react-native';
import contactService from '../services/contacts';
import { useEffect, useState } from 'react';
import ContactFlatList from '../components/ContactFlatList';

export default function HomeScreen() {


  const [contacts, setContacts] = useState([])
  const [ showForm, setShowForm ] = useState(false);
  const [newContact, setNewContact ] = useState({
    fullName: '',
    age: '',
    phone: ''
  })

  

  useEffect(() => {
    contactService.getContacts().then(contacts => {
      setContacts(contacts)
    })
  }, [])

  const handleInput = (name, value) => {
    setNewContact({ ...newContact, [name]: value})
  }

  const handleSubmit = () => {
    setContacts([newContact, ...contacts])
    setNewContact({ fullName: '', age: '', phone: ''})
    setShowForm(false)
  }

  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Listado de Contactos</Text>
          <Button title="Agregar Contacto" onPress={() => setShowForm(!showForm)}/>
        </View>

        {
            showForm && (
                <View style={styles.form}>
                    <TextInput
                        placeholder='Nombre Completo'
                        value={newContact.fullName}
                        onChangeText={(value) => handleInput('fullName', value)}
                        style={ styles.input}
                    />
                    <TextInput
                        placeholder='Edad'
                        value={newContact.age}
                        onChangeText={(value) => handleInput('age', value)}
                        style={ styles.input}
                    />
                    <TextInput
                        placeholder='Telefono'
                        value={newContact.phone}
                        onChangeText={(value) => handleInput('phone', value)}
                        style={ styles.input }
                    />
                    <Button title="Guardar" onPress={handleSubmit} />
                </View>
            )
        }
        
        {/* ScrollView */}
        {/* <ContactScrollView contacts={contacts} /> */}

        {/* FlatList */}
        <ContactFlatList contacts={contacts} />
        


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
