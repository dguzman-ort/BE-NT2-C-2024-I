import { StatusBar } from 'expo-status-bar';
import { Card } from "@rneui/base"
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TextInput } from 'react-native';
import AuthContext, { defaultAuthData } from '../services/AuthContext';
import { useContext } from 'react';

export default function SettingScreen() {

  const { authData, setAuthData } = useContext(AuthContext)

  const logout = () => {
    setAuthData(defaultAuthData)
  }

  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />

        <View>
          <Card containerStyle={{}} wrapperStyle={{}}>
            <Card.Title>{authData.profile.fullName}</Card.Title>
            <Card.Divider />
            <View style={{ position: "relative", alignItems: "center" }}>
              <Image
                style={{ width: "100%", height: 100 }}
                resizeMode="contain"
                source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
              />
              <Text>Email: {authData.profile.email}</Text>
              <Text>Role: {authData.profile.role}</Text>
            </View>
          </Card>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
            <Button title="Logout" onPress={logout} />
          </View>
        </View>

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
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }

});
