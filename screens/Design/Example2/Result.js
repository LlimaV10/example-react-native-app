import * as React from 'react'
import {Button, ScrollView, View} from "react-native";

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        {/*Example code ---------------------------*/}
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
        {/*Example code ---------------------------*/}
      </ScrollView>
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
