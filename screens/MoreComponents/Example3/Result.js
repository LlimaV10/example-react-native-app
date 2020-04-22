import React from 'react'
import {Button, FlatList, Text, View} from "react-native";

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/*Example code ---------------------------*/}
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devin1'},
          {key: 'Dan1'},
          {key: 'Dominic1'},
          {key: 'Jackson1'},
          {key: 'James1'},
          {key: 'Joel1'},
          {key: 'John1'},
          {key: 'Jillian1'},
          {key: 'Jimmy1'},
          {key: 'Julie1'},
        ]}
        renderItem={
          ({item}) =>
            <Text style={{
              padding: 10,
              fontSize: 18,
              height: 44,
            }}>
              {item.key}
            </Text>
        }
      />
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
