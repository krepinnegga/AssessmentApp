import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { HEADER_HEIGHT_NARROWED, HEADER_HEIGHT_EXPANDED } from '../ConstantData';
import { BlurView } from 'expo-blur';
import Animated, { useAnimatedStyle, interpolate, SharedValue, Extrapolation } from 'react-native-reanimated';

interface Props {
  scrollY: SharedValue<number>;
}

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const Header: React.FC<Props> = ({ scrollY }) => {
  const imageScale = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [-40, 0],
      [5, 1],
      Extrapolation.EXTEND
    );
    return {
      transform: [{ scale }],
    };
  });

  const blurOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [-60, 0, 50, 100],
      [1, 0, 0, 1],
      Extrapolation.CLAMP
    );
    return {
      opacity,
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedImageBackground
        source={require('../assets/Banner.png')}
        style={[styles.image, imageScale]}
      >
        <AnimatedBlurView
          tint="dark"
          intensity={96}
          style={[StyleSheet.absoluteFill, styles.blurView, blurOpacity]}
        />
      </AnimatedImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: '100%',
    height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
  },
  blurView: {
    zIndex: 2,
  },
});

export default Header;
