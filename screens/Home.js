import * as React from 'react'
import {Button, Platform, StyleSheet, Text, View} from "react-native";
import NextScreenButtonAndroid from "../navigation/NextScreenButtonAndroid";
import navItems from "../data/nav-items";

const platformMessage = Platform.select({
  ios: `You're now running app on IOS device`,
  android: `You're now running app on Android device`,
});

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the example React Native app!</Text>
      <Text style={styles.instructions}>{platformMessage}</Text>
      <Button
        onPress={() => {
          navigation.navigate(navItems[1].name)
        }}
        title="Let's walk through"
      />
      <NextScreenButtonAndroid {...props} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
});

export default Home
