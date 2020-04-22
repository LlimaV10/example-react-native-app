import * as React from 'react'
import {Button, Text, View, StyleSheet, ScrollView} from "react-native";

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        {/*Example code ---------------------------*/}
        <View style={styles.container}>
          <Text style={styles.red}>
            just red
          </Text>
          <Text style={styles.bigBlue}>
            just bigBlue
          </Text>
          <Text style={[styles.bigBlue, styles.red]}>
            bigBlue, then red
          </Text>
          <Text style={[styles.red, styles.bigBlue]}>
            red, then bigBlue
          </Text>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Result
