import { Text, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import Animated, { useAnimatedStyle, interpolate, SharedValue } from 'react-native-reanimated';

interface Props {
  scrollY: SharedValue<number>;
}
  

const BrandName: React.FC<Props> = ({ scrollY }) => {
  const insets = useSafeAreaInsets();

  const brandNameStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [90, 110], [0, 1.0]);
    const translateY = interpolate(scrollY.value, [90, 120], [30, 0]);

    return {
      zIndex: 0,
      position: 'absolute',
      top: insets.top + 10,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={brandNameStyle}>
      <Image source={require('../assets/Logo.png')} style={{ width: 50, height: 50 }} />
      <Text style={styles.titleText}>The Food Cafe</Text>
    </Animated.View>
  );
};


export default BrandName

const styles = StyleSheet.create({
  titleText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  });
  