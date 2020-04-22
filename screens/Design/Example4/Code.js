import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text>{`
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }} />
        <View style={{
          height: 50,
          backgroundColor: 'skyblue'
        }} />
        <View style={{
          height: 100,
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
