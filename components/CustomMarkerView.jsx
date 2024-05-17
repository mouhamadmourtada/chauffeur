import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CustomMarkerView = () => {
  return (
    <View>
      {/* je dois faire un custom marker view */}
      {/* <Image uri ={"https://cdn-icons-png.flaticon.com/512/3089/3089627.png"}></Image> */}
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3089/3089627.png'}}
       style={{width: 40, height: 40}} />
    </View>
  )
}

export default CustomMarkerView

const styles = StyleSheet.create({})