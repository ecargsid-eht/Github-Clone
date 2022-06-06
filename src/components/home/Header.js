import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
          <Text>Instagram</Text>
      </View>
      <View>
        <AntDesign name="message1" size={20} color="black"/>
        <FontAwesome name="plus-square-o" size={20} color="black"/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:60,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    brand:{

    }
})