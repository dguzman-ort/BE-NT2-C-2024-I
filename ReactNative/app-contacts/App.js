import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import contactService from './services/contacts';
import { useEffect, useState } from 'react';

import constants from "expo-constants";


import { Card } from '@rneui/themed';
import Contact from './components/Contact';
import ContactScrollView from './components/ContactScrollView';
import ContactFlatList from './components/ContactFlatList';

export default function App() {


  const [contacts, setContacts] = useState([])

  useEffect(() => {
    contactService.getContacts().then(contacts => {
      setContacts(contacts)
    })
  }, [])

  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Listado de Contactos</Text>
          <Button title="Agregar Contacto" />
        </View>
        
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
});
