import { Animated, Text, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';

interface Props {
    scrollY: Animated.Value;
  }
  

const BrandName:React.FC<Props> = ({ scrollY }) => {
    const insets = useSafeAreaInsets();
    
  return (
    <Animated.View
      style={{
        zIndex: 0,
        position: 'absolute',
        top: insets.top,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
        opacity: scrollY.interpolate({
          inputRange: [90, 110],
          outputRange: [0, 1],
        }),
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [90, 120],
              outputRange: [30, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
      <Image source={require('../assets/Logo.png')} />

      <Text style={styles.titleText}>The Food Cafe</Text>
    </Animated.View>
  )
}

export default BrandName

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  });
  