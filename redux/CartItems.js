import { View, Text, StyleSheet } from 'react-native'
import {React, useState} from 'react'

const CartItems = () => {

const [cartItems, setCartItems] = useState([])
const [total, setTotal] = useState(0)

  return (
    <View>
      <Text style={styles.container}>Product cart: {total}</Text>
    </View>
  )
}

export default CartItems


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderWidth: 2,
    color: 'white',
    padding: 5,
    height: 50,
    fontSize: 25,
    fontWeight: "bold",
    textAlign:"center",
    borderRadius: 30
  },
}); 