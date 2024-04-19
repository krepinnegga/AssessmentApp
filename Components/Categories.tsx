import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../ConstantData';

interface ICategories {
  id: number;
  name: string;
}

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const Categories: React.FC<Props> = ({ onSelectCategory, selectedCategory }) => {
  const [selectedItem, setSelectedItem] = useState<string>(selectedCategory);

  const handleCategoryPress = (category: string) => {
    setSelectedItem(category);
    onSelectCategory(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {Category.map((item: ICategories) => {
          const isSelected = item.name === selectedItem;
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
