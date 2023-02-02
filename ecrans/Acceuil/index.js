import { View, Text } from 'react-native'
import React from 'react'
import ButtonAcceuil from '../../composantes/ButtonAcceuil'
const Acceuil = ({navigation}) => {
  return (
    <View >
        <ButtonAcceuil navigation={navigation}/>
    </View>
  )
}

export default Acceuil