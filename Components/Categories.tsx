import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Category} from '../ConstantData';
import React, {useState} from 'react';

interface ICategories {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);

  const handleCategoryPress = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View>
      <View>
        <FlatList
          horizontal
          data={Category}
          renderItem={({item}: {item: ICategories}) => {
            const isSelected = item.id === selectedCategory;
            return (
              <TouchableOpacity
                onPress={() => handleCategoryPress(item.id)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
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
