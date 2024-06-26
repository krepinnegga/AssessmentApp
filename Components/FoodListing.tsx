import React, {useState, useMemo} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageURISource, Dimensions, ScrollView } from 'react-native';
import { Foods } from '../ConstantData';

const { height: Height } = Dimensions.get('screen');

interface IFood {
  id: number;
  name: string;
  price: number;
  image: ImageURISource;
  slug: string;
  description: string;
}

interface Props {
  categoryFilter: string;
}

const FoodListing = ({ categoryFilter } : Props) => {
  const [amount, setAmount] = useState<{ [key: number]: number }>({});

  //let filteredFoods: IFood[] = [];

  const filteredFoods = useMemo(() => {
    let tempFoods: IFood[] = [];

    if (categoryFilter === 'Popular') {
      tempFoods = Foods;
    } else {
      tempFoods = Foods.filter(food => food.slug === categoryFilter);
    }
    return tempFoods
  }, [categoryFilter])



  const length = filteredFoods.length;

  let totalHeight = null;
  if (length <= 5 ) {
    const itemHeight = 370;
    totalHeight = length * itemHeight;
  } else {
    totalHeight = null;
  }

  const handleIncrement = (itemId: number) => {
    setAmount((prevAmounts) => ({
      ...prevAmounts,
      [itemId]: (prevAmounts[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId: number) => {
    setAmount((prevAmounts) => ({
      ...prevAmounts,
      [itemId]: Math.max((prevAmounts[itemId] || 0) - 1, 0),
    }));
  };


  return (
    <ScrollView 
      style={[styles.container, { height: totalHeight === null ? Height * 2.3 : totalHeight }]} 
      contentContainerStyle={{ minHeight: totalHeight }}
    >
      <Text style={styles.title}>{categoryFilter} ({length})</Text>
      {filteredFoods.map((item: IFood) => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          {/* Counter */}
          <View style={styles.counterContainer}>
            <TouchableOpacity  
                onPress={() => handleDecrement(item.id)} 
                style={styles.counterButton}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>{amount[item.id] || 0}</Text>
            <TouchableOpacity  
               onPress={() => handleIncrement(item.id)} 
               style={styles.counterButton}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 8,
    backgroundColor: '#13131B'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#1C1C24',
    padding: 15,
    borderRadius: 13.57,
  },
  image: {
    width: 78,
    height: 77,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 3,
  },
  description: {
    fontSize: 13,
    color: '#DACFDB',
    marginBottom: 3,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5.38,
    backgroundColor: '#4E4E5D',
  },
  counterButtonText: {
    color: 'white',
    fontSize: 18,
  },
  counterText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
  },
});

export default FoodListing;
