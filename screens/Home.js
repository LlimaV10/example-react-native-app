import * as React from 'react'
import {Button, Platform, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";

const platformMessage = Platform.select({
  ios: `, you're now running app on IOS device`,
  android: `, you're now running app on Android device`,
});

const changeNameMessage = Platform.select({
  ios: `You could change your name inside settings tab`,
  android: `You could change your name inside navigation bar`,
});

const Home = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the example React Native app!</Text>
      <Text style={styles.instructions}>{"Hi " + props.account.username + platformMessage}</Text>
      <Text style={styles.changeNameText}>{changeNameMessage}</Text>
      <Button
        onPress={() => {
          navigation.navigate('SecondScreen')
        }}
        title="Let's walk through"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 8,
  },
  changeNameText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
});

const mapStateToProps = ({ account }) => ({
  account
});

export default connect(mapStateToProps)(Home)

