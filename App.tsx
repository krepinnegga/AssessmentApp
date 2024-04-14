import React, { useRef } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Buttons from './Components/Buttons';
import RefreshArrow from './Components/RefreshArrow';
import Header from './Components/Header';
import BrandName from './Components/BrandName';
import CategoryFilter from './Components/CategoryFilter';

export default function WrappedApp() {
    return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    );
}


function App() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
       
       <Buttons />

       <RefreshArrow scrollY={scrollY} />

       <Header scrollY={scrollY} />

       <BrandName scrollY={scrollY} />
  
       <CategoryFilter scrollY={scrollY} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131B',
  },
});
