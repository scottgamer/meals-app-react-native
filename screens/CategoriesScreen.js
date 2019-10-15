import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title='To meals screen'
        onPress={() => {
          props.navigation.navigate('CategoryMeals');
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
