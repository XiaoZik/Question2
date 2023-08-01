import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function AddTodo({ submitHandler, color, title }) {

  return (
    <View style = {styles.input}>
      <Button title = {title} color= {color} onPress={() => submitHandler()} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1
  },
});