import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text>{`
        <View>
          <View style={{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue'
          }} />
          <View style={{
            width: 100,
            height: 100,
            backgroundColor: 'skyblue'
          }} />
          <View style={{
            width: 150,
            height: 150,
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
