import * as React from 'react'
import {Button, View} from "react-native";

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/*Example code ---------------------------*/}
      <View style={{flex: 1}}>
        <View style={{
          flex: 1,
          backgroundColor: 'powderblue'
        }} />
        <View style={{
          flex: 2,
          backgroundColor: 'skyblue'
        }} />
        <View style={{
          flex: 3,
          backgroundColor: 'steelblue'
        }} />
      </View>
      {/*Example code ---------------------------*/}
      <Button
        onPress={() => {
          navigation.navigate('Code')
        }}
        title='Watch code'
      />
    </View>
  )
};

export default Result
