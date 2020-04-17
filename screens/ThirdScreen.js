import * as React from 'react'
import {View, Text} from "react-native";

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Third Screen</Text>
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

export default ThirdScreen
