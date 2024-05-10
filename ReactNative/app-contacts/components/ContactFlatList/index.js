import { FlatList } from "react-native"
import Contact from "../Contact"

export default ({ contacts }) => {

  const renderItem = ({ item }) => {
    return (
      <Contact contact={item} />
    )
  }

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
    />
  )
}