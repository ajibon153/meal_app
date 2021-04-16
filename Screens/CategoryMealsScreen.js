import React from 'react';
import { View, Flatlist, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES, MEALS } from '../Data/Dummy-data';
import MealItems from '../Components/MealItems';

const CategoryMeals = (props) => {
  const renderMealItem = (itemData) => {
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
              // data: itemData.item,
            },
          });
        }}
      />
    );
  };
  const catId = props.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
      {/* <Text>The Category Meals !</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go Detail Meal'
        onPress={() => {
          props.navigation.push('MealDetail');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      /> */}
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMeals;
