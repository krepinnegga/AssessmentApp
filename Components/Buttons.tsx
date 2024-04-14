import { View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Buttons() {
    const insets = useSafeAreaInsets();
  
    return (
      <View
        style={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          justifyContent: 'space-between',
          left: 20,
          right: 20,
          top: insets.top + 10,
        }}>
        <Image source={require('../assets/Back.png')} />
        <Image source={require('../assets/More.png')} />
      </View>
    );
  }