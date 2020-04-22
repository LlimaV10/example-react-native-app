import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        <Text>{`
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
