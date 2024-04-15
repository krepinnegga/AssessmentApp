import React from 'react';
import { View, ImageBackground, Animated, StyleSheet } from 'react-native';
import { HEADER_HEIGHT_NARROWED, HEADER_HEIGHT_EXPANDED } from '../ConstantData';
import { BlurView } from 'expo-blur';

interface Props {
    scrollY: Animated.Value;
  }

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const Header: React.FC<Props> = ({ scrollY }) => {
  const imageScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [5, 1],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  });

  return (
    <View style={styles.container}>
      <AnimatedImageBackground
        source={require('../assets/Banner.png')}
        style={[
          styles.image,
          {
            transform: [{ scale: imageScale }],
          },
        ]}
      >
     <AnimatedBlurView
        tint="dark"
        intensity={96}
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: 2,
          opacity: scrollY.interpolate({
            inputRange: [-50, 0, 50, 100],
            outputRange: [1, 0, 0, 1],
          }),
        }}
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
});

export default Header;
