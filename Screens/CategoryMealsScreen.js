import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../Data/Dummy-data';
import MealList from '../Components/MealList';

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMeals.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMeals;
