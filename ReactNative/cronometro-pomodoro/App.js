import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { vibrate, vibrateLong } from './utils';
import Cronometro from './components/Cronometro';
import { useEffect, useState } from 'react';
import GlobalContext from './components/globals/GlobalContext';


export default function App() {

  const [isRunning, setIsRunning] = useState(false)
  const [isWorking, setIsWorking] = useState(true)

  const [shouldReset, setShouldReset] = useState(false)


  const reset = () => {
    setIsRunning(false)
    setShouldReset(true)
  }

  useEffect(() => {
    if (isRunning){
      setShouldReset(false)
    }
  }, [isRunning])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.center]}> Tiempo de { isWorking ? 'Trabajo': 'Descanso'}</Text>


      <GlobalContext.Provider value={{
        isRunning,
        isWorking,
        setIsWorking,
        shouldReset
      }}>
        <Cronometro />
      </GlobalContext.Provider>
      

      
      <View style={styles.buttonContnainer}>
        <Button
          title={ isRunning ? 'Pausar' : 'Iniciar'}
          onPress={() => {setIsRunning(!isRunning)}}
        />
        <Button
          title='Reiniciar'
          onPress={reset}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 25
  },
  buttonContnainer: {
    padding: 20,    
    flexDirection: 'row',
  }

});
