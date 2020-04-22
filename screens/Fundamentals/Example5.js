import * as React from 'react'
import {View, Text, Image} from "react-native";

const Example5 = () => {
  return (
    <View>
      <Text>{"Used <Image> component:"}</Text>
      <Text>{"<Image"}</Text>
      <Text>{"  source={{uri: \"https://reactnative.dev/docs/assets/p_cat1.png\"}}"}</Text>
      <Text>{"  style={{width: 100, height: 100}}"}</Text>
      <Text>{"/>"}</Text>

      <Text />

      <Text>{"Result:"}</Text>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 100, height: 100}}
      />
    </View>
  )
};

export default Example5
