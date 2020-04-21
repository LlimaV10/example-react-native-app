import * as React from 'react';
import {Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {bindActionCreators} from "redux";
import {setUsername} from "../redux/account/actions";
import {connect} from "react-redux";

const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  )
};

const SettingsIos = (props) => {
  const [inputName, setInputName] = React.useState("");

  const {username} = props.account;
  const {setUsername} = props;
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Hello {username}</Text>
          <Text style={[styles.text, {marginTop: 9}]}>Set new name:</Text>
          <TextInput
            style={styles.input}
            defaultValue={username}
            onChangeText={text => {
              setInputName(text)
            }}
          />
        </View>
        <Button
          onPress={() => {
            setUsername(inputName)
          }}
          title="Save"
        />
      </View>
    </DismissKeyboard>
  )
};

const styles = {
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 12,
    color: '#000'
  },
  input: {
    borderWidth: .5,
    borderColor: '#cbcbcb',
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 24,
    padding: 5,
  },
};

const mapStateToProps = ({ account }) => ({
  account
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUsername
    },
    dispatch
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(SettingsIos)
