import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import data from '../data'


export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
    {data.map((object) =>
      <View style={styles.imageContainer}>
        <Image 
          source={object.image} 
          style={styles.image} 
        />
        <Button
          title="Подробнее"
          onPress={() =>
            navigation.navigate('Detail', { id: object.id })}
        />
      </View>
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  imageContainer: {
    width: '45%',
    height: 280,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});