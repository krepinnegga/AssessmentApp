import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageURISource, Dimensions } from 'react-native';
import { Foods } from '../ConstantData';

const{height:Height} = Dimensions.get('screen');

interface IFood {
    id: number;
    name: string;
    price: number;
    image: ImageURISource;
    slug: string;
    description: string;
}

const FoodListing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular (10)</Text>
      {Foods.map((item: IFood) => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          {/* Counter */}
          <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.counterButton}>
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>5</Text>
            <TouchableOpacity style={styles.counterButton}>
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: Height
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
    marginRight: 5,
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
