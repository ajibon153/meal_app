import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import FilterScreen from '../Screens/Filters';

// import DefaultText from '../Component/DefaultText';

import Colors from '../Constants/Color';

const defaultStackNavigator = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: '#fff',
};

// page meal dan dalam2nya
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigator,
  }
);

// page favorite dan dalam2nya
const FavoriteNavigator = createStackNavigator(
  {
    Favorite: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigator,
  }
);

// page filter dan dalam2nya
const FilterNavigator = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigator,
  }
);

// bottom navigator
const tabsConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorite: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

// awalnya export default ini sbelum ada drawer
const MealFavTabNavigator = createMaterialBottomTabNavigator(tabsConfig, {
  activeColor: 'white',
  shifting: true,
  barStyle: {
    backgroundColor: Colors.primaryColor,
  },
  // KALO PAKE createBottomTabNavigator
  // tabBarOptions: {
  //   activeTintColor: Colors.accentColor,
  // },
});

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealFavTabNavigator,
      navigationOptions: { drawerLabel: 'Meals' },
    },
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      // labelStyle: {
      //   fontFamily: 'open-sans-bold',
      // },
    },
  }
);

export default createAppContainer(MainNavigator);
