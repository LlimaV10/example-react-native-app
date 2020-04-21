import * as React from 'react'
import {AsyncStorage, Button, Platform, StyleSheet, Text, View} from "react-native";

const platformMessage = Platform.select({
  ios: `, you're now running app on IOS device`,
  android: `, you're now running app on Android device`,
});

const changeNameMessage = Platform.select({
  ios: `You could change your name inside settings tab`,
  android: `You could change your name inside navigation bar`,
});

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'User'
    }
  }

  updateName = () => {
    AsyncStorage.getItem("USERNAME", (error, result) => {
      if (result != null) {
        this.setState({userName: result})
      }
    });
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', this.updateName);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    AsyncStorage.getItem("USERNAME", (error, result) => {
      if (result != null) {
        this.setState({userName: result})
      }
    });
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the example React Native app!</Text>
        <Text style={styles.instructions}>{"Hi " + this.state.userName + platformMessage}</Text>
        <Text style={styles.changeNameText}>{changeNameMessage}</Text>
        <Button
          onPress={() => {
            navigation.navigate('SecondScreen')
          }}
          title="Let's walk through"
        />
      </View>
    );
  }
}

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

export default Home
