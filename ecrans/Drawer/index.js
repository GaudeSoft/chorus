import { View, Text } from 'react-native'
import React from 'react'
import DrawerMenu from '../../composantes/DrawerMenuItem/DrawerMenu'
// import styles from '../Drawer/style'
const Drawer = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#d6ccc2'}}>
     <DrawerMenu navigation={navigation}/>
    </View>
  )
}

export default Drawer