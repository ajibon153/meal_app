import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Filter = (props) => {
  return (
    <View style={styles.container}>
      <Text>The Filter !</Text>
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

export default Filter;
