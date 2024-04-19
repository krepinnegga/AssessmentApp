import { Animated, Dimensions} from 'react-native';
import React from 'react'
import { HEADER_HEIGHT_NARROWED } from '../ConstantData';
import Categories from './Categories';



const {height: Height} = Dimensions.get('window');

interface Props {
    scrollY: Animated.Value;
  }


const CategoryFilter:React.FC<Props> = ({ scrollY }) => {
  return (
<Animated.ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: { y: scrollY },
            },
          },
        ],
        { useNativeDriver: true }
      )}
      style={{
        zIndex: 3,
        marginTop: HEADER_HEIGHT_NARROWED,
        paddingTop: Height < 892 ? 240 : 200,
      }}>
     
      <Categories />

    

    </Animated.ScrollView>
  )
}
export default CategoryFilter

