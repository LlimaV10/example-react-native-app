import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        <Text>{`
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
        `}</Text>
        <Text />
        <Text>{"const styles = StyleSheet.create({\n" +
        "  container: {\n" +
        "    marginTop: 50,\n" +
        "  },\n" +
        "  bigBlue: {\n" +
        "    color: 'blue',\n" +
        "    fontWeight: 'bold',\n" +
        "    fontSize: 30,\n" +
        "  },\n" +
        "  red: {\n" +
        "    color: 'red',\n" +
        "  },\n" +
        "});"}</Text>
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
