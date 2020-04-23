import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        <Text>{`
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
        `}</Text>
        <Text>{`
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
