import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,  View, TextInput, Image, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.bigText}>
          Unlike the more generic ScrollView, the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data.
        </Text>

        <TextInput style={styles.input}/>

        <Image 
          source={require('./pic.jpg')}
          style={styles.img}
        />

        <Text style={{marginVertical: 20}}>
          Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
        </Text>

        <Button
          title='Press me'
          color='black'
          onPress={() => Alert.alert('Button pressed')} />

          <Text style={styles.bigText}>
            ListViews
          </Text>

          <Text style={{marginBottom: 30}}>
            Many of the following components provide wrappers for commonly used Android classes.
          </Text>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  scrollView: {
    padding: 10,
  },
  bigText: {
    fontSize: 40,
    lineHeight: 55
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  img: {
    width: 300,
    height: 200,
  }
});
