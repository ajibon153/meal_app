import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../Components/HeaderButton';
import Colors from '../Constants/Color';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../Store/Actions/Meals';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title2}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const Filter = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = React.useState(false);
  const [isLactoseFree, setIsLactoseFree] = React.useState(false);
  const [isVegan, setIsVegan] = React.useState(false);
  const [isVegetarian, setIsVegetarian] = React.useState(false);

  const dispatch = useDispatch();

  const saveFilters = React.useCallback(() => {
    const appliedFilters = {
      GlutenFree: isGlutenFree,
      LactoseFree: isLactoseFree,
      Vegan: isVegan,
      Vegetarian: isVegetarian,
    };
    console.log('appliedFilters', appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  React.useEffect(() => {
    let getPar = navigation.getParam('save');
    console.log('saveFilters', saveFilters);
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Gluten Free'
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose Free'
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

Filter.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meal',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={() => {
            console.log('triger', navData.navigation.getParam('save'));
            navData.navigation.getParam('save');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default Filter;
