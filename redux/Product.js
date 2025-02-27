import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {data} from './data'
import CartItems from './CartItems'

const product = () => {

  return (
    <View style={styles.container}>
    <CartItems />
    <ScrollView style={{padding: 5}}>
      {
        data.map((product, index) => (
          <View key={index} style={{padding: 5}}>
            <Text>{index+1}. {product.name}</Text>
            <Text>{product.color}</Text>
            <Text>{product.model}</Text>
            <Image style={{height:100, width:50}} source={{uri: product.image}} />
            <Button title="Add to Cart" onPress={()=>Alert.alert(product.name)}/>
          </View>
        ))
      }
   </ScrollView>
   </View>
  )
}

export default product

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 2, 
    padding: 10, 
    borderRadius: 10, 
    borderColor: 'black'
},


}); 