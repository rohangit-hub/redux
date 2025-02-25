import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import "./global.css"
import Usercontext from './Usercontext.js'

export const userContext = createContext("tiwari")

const App = () => {

  const [user, setUser] = useState("ramesh")

  return (

    <userContext.Provider value={user}>

      <View>
        <Text className='bg-green-600'>Rohan Tiwari khanpur</Text>
        <Usercontext />
      </View>

    </userContext.Provider >
  )
}

export default App