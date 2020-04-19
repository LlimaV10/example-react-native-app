import * as React from 'react'
import {View, Text} from "react-native";
import NextScreenButtonAndroid from "../navigation/NextScreenButtonAndroid";

const SecondScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>
      <NextScreenButtonAndroid {...props} />
    </View>
  )
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
};

export default SecondScreen
