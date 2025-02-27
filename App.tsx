import { View, Text, Button } from 'react-native'
import{useState} from 'react'
import "./global.css"
import {StyleSheet} from 'react-native';
import Prodct from "./redux/Product"

const App = () => {
  const [dark, setDark] = useState(false)
  const [csschanger, setCsschanger] = useState(false)

  return (

      <View style={[styles.container , {backgroundColor: dark ? 'black' : 'white'}]}>
        <Text style={styles.title1} >React-Native  |  Redux</Text>
        <Button title={dark ? 'Black' : 'White'} onPress={() => setDark(!dark)} />

        <Text></Text>
        <Button title="Press" onPress={() => setCsschanger(!csschanger)} />
        <Text style={ csschanger ? styles.title1 : styles.title2} >{csschanger ? 'Changed' : 'Not Changed'}</Text>
        <Prodct/>
      </View>
  )
}
export default App

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
  },
  title1: {
    marginTop: 16,
    marginBottom: 8,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  title2: {
    marginTop: 16,
    marginBottom: 8,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});