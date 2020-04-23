import React, {useRef} from 'react'
import {Animated, Button, Dimensions, PanResponder, Text, View} from "react-native";

const Result = ({navigation}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const nextColor = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        pan.setValue({x: gestureState.dx, y: gestureState.dy});

        const maxDistance = Dimensions.get('window').height / 2;
        const distance = Math.sqrt(gestureState.dx * gestureState.dx + gestureState.dy * gestureState.dy);
        let red = 255 * distance / maxDistance;
        if (red > 255) {
          red = 255;
        }
        nextColor.setValue(red);
      },
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(nextColor, {toValue: 0}).start();
      }
    })
  ).current;

  return (
    <View style={{flex: 1}}>
        {/*Example code ---------------------------*/}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Move this box</Text>
          <Animated.View
            style={{
              transform: [{ translateX: pan.x }, { translateY: pan.y }],
              borderRadius: 5,
              backgroundColor: nextColor.interpolate({
                inputRange: [0, 255],
                outputRange: ['rgb(0, 0, 255)', 'rgb(255, 0, 0)']
              })
            }}
            {...panResponder.panHandlers}
          >
            <View style={{
              height: 150,
              width: 150,
            }} />
          </Animated.View>
        </View>
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
