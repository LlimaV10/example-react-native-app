import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text>{`
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
        `}</Text>
      </ScrollView>
      <Button
        onPress={() => {
          navigation.navigate('Result')
        }}
        title='Watch result'
      />
    </View>
  )
};

export default Code
