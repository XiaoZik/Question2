import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function RowItem({item}) {

  const colorStyling = {
    backgroundColor: item.text
  }

  return (
    <View>
    <TouchableOpacity onPress={() => alert(`This is ${item.text} color`)}> 
      <Text style = {[colorStyling, styles.item]}>{item.text}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});