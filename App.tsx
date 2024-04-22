import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Buttons from './Components/Buttons';
import RefreshArrow from './Components/RefreshArrow';
import Header from './Components/Header';
import CategoryFilter from './Components/CategoryFilter';
import { useSharedValue } from 'react-native-reanimated';


export default function WrappedApp() {
    return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    );
}


function App() {
  const scrollY = useSharedValue(0);

  return (
   <View style={styles.container}>
   
      <StatusBar barStyle="light-content" />
       
       <Buttons />

       <RefreshArrow scrollY={scrollY} />

       <Header scrollY={scrollY} />
       
       <CategoryFilter scrollY={scrollY}  />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131B',
  },
});
