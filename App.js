// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';

import MealsNavigator from './Navigation/MealsNavigation';
import MealsReducer from './Store/Reducers/Meals';

const rootReducer = combineReducers({
  meals: MealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          console.log('Finished');
          setfontLoaded(true);
        }}
        onError={(err) => console.log('ERROR', err)}
        // onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>Meals App</Text>
  //     <StatusBar style='auto' />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
