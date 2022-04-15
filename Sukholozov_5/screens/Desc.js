import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import data from '../data'

export default function Desc({ navigation, route }) {
  const id = route.params.id;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data[id].desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
});