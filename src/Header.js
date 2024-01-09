import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My ToDo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 60,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;
