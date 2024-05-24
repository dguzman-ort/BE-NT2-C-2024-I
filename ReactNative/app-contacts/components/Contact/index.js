import { Card } from "@rneui/base"
import { useEffect } from "react"
import { Text, View, Image, Button } from "react-native"


export default ({ contact }) => {
  // useEffect(() => {
  //   console.log("Se renderizo un Contact")
  //   return () => {
  //     console.log("Se desmonto un Contact")
  //   }
  // }, [])
  
  return (
    <View>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>{contact.fullName} ({contact.age})</Card.Title>
        <Card.Divider />
        <View style={{ position: "relative", alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
          />
          <Text>{contact.phone}</Text>
        </View>
      </Card>
    </View>
  )
}