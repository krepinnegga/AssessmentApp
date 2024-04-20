import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Category } from '../ConstantData';

interface ICategories {
  id: number;
  name: string;
}

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
  showTitle: boolean;
}

const Categories: React.FC<Props> = ({ onSelectCategory, selectedCategory, showTitle }) => {
  const [selectedItem, setSelectedItem] = useState<string>(selectedCategory);


  useEffect(() => {
    setSelectedItem(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryPress = (category: string) => {
    setSelectedItem(category);
    onSelectCategory(category);
  };

  return (
    <View style={styles.container}>
       {showTitle && 
          <View style={styles.mainTitle}>
            <View style={styles.titleElement}>
            <Image source={require('../assets/Logo.png')} style={{width: 40, height: 40}} />
            <Text style={styles.titleText}>The Food Cafe</Text>
            </View>
         </View>
      }
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
  mainTitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    top: 60,
  },
  titleElement: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Categories;
