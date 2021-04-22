import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import CategoryMeals from './CategoryMealsScreen';
import CategoryGridTile from '../Components/CategoryGridTile';
import HeaderButton from '../Components/HeaderButton';

import { CATEGORIES } from '../Data/Dummy-data';
import Colors from '../Constants/Color';

const CategoriesScreen = (props) => {
  // console.log('props', props);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, i) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns='2'
    />
  );
  // return (
  //   <View style={styles.container}>
  //     <Text>The Categories Screens !</Text>
  //     <Button
  //       title='Go To Meal'
  //       onPress={() => {
  //         props.navigation.navigate('CategoryMeals');
  //       }}
  //     />
  //   </View>
  // );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
  },
});

export default CategoriesScreen;
