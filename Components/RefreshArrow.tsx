import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, interpolate, Extrapolation, SharedValue } from 'react-native-reanimated';


interface Props {
  scrollY: SharedValue<number>;
}

const RefreshArrow: React.FC<Props> = ({ scrollY }) => {
  const insets = useSafeAreaInsets();

  const arrowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [-20, 0], [1, 0], Extrapolation.CLAMP);
    const rotation = interpolate(scrollY.value, [-45, -35], [Math.PI, 0], Extrapolation.CLAMP);

    return {
      zIndex: 2,
      position: 'absolute',
      top: insets.top + 13,
      left: 0,
      right: 0,
      alignItems: 'center',
      opacity,
      transform: [{ rotate: `${rotation}rad` }],
    };
  });

  return (
    <Animated.View style={arrowStyle}>
      <Feather name="arrow-down" color="white" size={25} />
    </Animated.View>
  );
};

export default RefreshArrow;
