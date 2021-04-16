import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../Data/Dummy-data';

const MealdDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>The Meald Detail Screen !</Text>
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title='Go Home'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealdDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log('selectedMeal', selectedMeal);
  return { headerTitle: selectedMeal.title };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealdDetailScreen;
