import { FlatList, TouchableOpacity } from "react-native"
import Contact from "../Contact"
import { useNavigation } from '@react-navigation/native';

export default ({ contacts }) => {

  const navigation = useNavigation()

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('Details', { id: item.id })}
        onLongPress={() => alert('Contacto eliminado' )}
      >
        <Contact contact={item} />
      </TouchableOpacity>
      
    )
  }

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
    />
  )
}