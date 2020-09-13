import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

  const moveBall = () => {
    Animated.timing(value, {
      toValue: { x: 100, y: 100 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Animated.View style={value.getLayout()} >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: "red",
          }}
        />
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
