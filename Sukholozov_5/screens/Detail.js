import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import data from '../data'

export default function Detail({ navigation, route }) {
  const id = route.params.id;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data[id].name}</Text>
      <Image 
          source={data[id].image} 
          style={styles.image} 
        />
      <Button 
        title="Прочитать о горе"
        onPress={() =>
          navigation.navigate('Desc', { id: id })}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});