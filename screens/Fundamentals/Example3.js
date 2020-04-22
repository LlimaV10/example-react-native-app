import * as React from 'react'
import {View, Text} from "react-native";

const User = props => {
  return (
    <View><Text>My name is {props.name}</Text></View>
  )
};

const Example3 = () => {
  return (
    <View>
      <Text>{"Created User Component with a following code:"}</Text>
      <Text>{"<View><Text>My name is {props.name}</Text></View>"}</Text>
      <Text>{"And used like:"}</Text>
      <Text>{"<User name='Dmitry'/>"}</Text>
      <Text>{"<User name='John'/>"}</Text>
      <Text>{"<User name='Mary'/>"}</Text>

      <Text />

      <Text>{"Result:"}</Text>
      <User name='Dmitry'/>
      <User name='John'/>
      <User name='Mary'/>
    </View>
  )
};

export default Example3
