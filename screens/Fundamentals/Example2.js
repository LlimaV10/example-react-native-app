import * as React from 'react'
import {View, Text} from "react-native";

const User = () => {
  return (
    <View><Text>My name is John</Text></View>
  )
};

const Example2 = () => {
  return (
    <View>
      <Text>{"Created User Component with a following code:"}</Text>
      <Text>{"<View><Text>My name is John</Text></View>"}</Text>
      <Text>{"And used like:"}</Text>
      <Text>{"<User />"}</Text>
      <Text>{"<User />"}</Text>
      <Text>{"<User />"}</Text>

      <Text />

      <Text>{"Result:"}</Text>
      <User />
      <User />
      <User />
    </View>
  )
};

export default Example2
