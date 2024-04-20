import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Categories from './Categories';
import FoodListing from './FoodListing';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  Extrapolation,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Details from './Details';

const CategoryFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Popular');

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const scrollY = useSharedValue(0);

  const translateY = interpolate(scrollY.value, [0, 200], [0, -40], Extrapolation.CLAMP);

  const stick = useAnimatedStyle(() => {
    const top = interpolate(
      scrollY.value,
      [321 - 150, 321 + 250, 1800, 2300],
      [150, 0, 0, 150],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollY.value,
      [321 - 150, 321 + 250, 1800, 2300],
      [0, 1, 0.8, 1],
      Extrapolation.CLAMP
    );

    return {
      top,
      opacity,
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      translateY;
    },
  });

  return (
    <View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          zIndex: 3,
          marginTop: 200,
          paddingTop: 118,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details />
        <Categories 
           onSelectCategory={handleCategoryPress} 
           selectedCategory={selectedCategory} 
           showTitle={false}
         />
        <FoodListing 
           categoryFilter={selectedCategory} 
        />
      </Animated.ScrollView>

      <Animated.View style={[styles.horizontal, stick]}>
        <Categories onSelectCategory={handleCategoryPress} selectedCategory={selectedCategory} showTitle={true} />
      </Animated.View>
    </View>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  horizontal: {
    height: 267,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  titleText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
