import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../ConstantData';
import FoodListing from './FoodListing';
import Details from './Details';

interface ICategories {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Popular');

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Details />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {Category.map((item: ICategories) => {
          const isSelected = item.name === selectedCategory;
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleCategoryPress(item.name)}
              style={[styles.item, isSelected && styles.selectedItem]}>
              <Text style={[styles.text, isSelected && styles.selectedText]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <FoodListing categoryFilter={selectedCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131B'
  },
  headerContainer: {
    paddingBottom: 20,
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
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
