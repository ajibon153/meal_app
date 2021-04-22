import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MealItems from './MealItems';
import { useSelector } from 'react-redux';

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  console.log('favoriteMeals', favoriteMeals);
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItems
        title={itemData.item.title}
        duration={itemData.item.duration}
        data={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
              // data: itemData.item,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealList;
