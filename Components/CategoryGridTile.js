import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text numberOfLines={2} style={styles.title}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'right',
    fontSize: 16,
  },
});

export default CategoryGridTile;
