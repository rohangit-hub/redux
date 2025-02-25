import { View, Text } from 'react-native'
import React from 'react'

import {useContext} from "react";
import {userContext} from "./App"

const Usercontext = () => {
    const data = useContext(userContext)
  return ( 
    <View>
      <Text>usercontext Value =  {data} </Text>
    </View>
  )
}

export default Usercontext