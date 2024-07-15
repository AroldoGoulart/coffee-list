import { StyleSheet, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';
import { Text } from 'native-base';
import { useEffect, useRef } from 'react';

export function Loading() {
  const { colorMode } = useColorMode();
  const rotationAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotationAnimation]);

  const spin = rotationAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <Animated.View style={[styles.container, {
        borderColor: colorMode === 'dark' ? '#fff' : '#000',
        transform: [{ rotate: spin }]
      }]}>
        <Ionicons
          name="cafe"
          size={40}
          color={colorMode === 'dark' ? '#fff' : '#000'}
        />
      </Animated.View>
      <Text mt={'2'}>Loading...</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
  },
});