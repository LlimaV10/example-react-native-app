import React, {useState} from 'react'
import {View, Text, Button} from "react-native";

const Example4 = () => {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <View>
      <Text>{"Used state and <Button> component:"}</Text>
      <Text>{"const [isActivated, setIsActivated] = useState(false);"}</Text>
      <Text />
      <Text>{"<Button\n" +
      "      onPress={() => {\n" +
      "        setIsActivated(true)\n" +
      "      }}\n" +
      "      disabled={isActivated}\n" +
      "      title={isActivated ? 'Activated' : 'Not activated'}\n" +
      "/>"}</Text>

      <Text />

      <Text>{"Result:"}</Text>
      <Button
        onPress={() => {
          setIsActivated(true)
        }}
        disabled={isActivated}
        title={isActivated ? 'Activated' : 'Not activated'}
      />
    </View>
  )
};

export default Example4
