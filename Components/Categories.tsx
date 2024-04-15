import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Category} from '../ConstantData';
import React, {useState} from 'react';
import FoodListing from './FoodListing';

interface ICategories {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Popular");

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Category}
          renderItem={({item}: {item: ICategories}) => {
            const isSelected = item.name === selectedCategory;
            return (
              <TouchableOpacity
                onPress={() => handleCategoryPress(item.name)}
                style={[styles.item, isSelected && styles.selectedItem]}>
                <Text style={[styles.text, isSelected && styles.selectedText]}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.container}
        />
      </View>
      <FoodListing categoryFilter={selectedCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal:10
  },
  item: {
    width: 91,
    height: 46,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C24',
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },
  selectedItem: {
    borderColor: '#FFC107',
    borderWidth: 1,
  },
  selectedText: {
    color: '#FFC107',
  },
});

export default Categories;
