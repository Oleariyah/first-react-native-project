import React from 'react';
import {
    StyleSheet, 
    Text,
    TouchableOpacity, 
    View 
   } from 'react-native';

export default props => {
  const {id, onDelete, title} = props;
  return (
    <TouchableOpacity onPress={onDelete} activeOpacity={0.8}>
      <View style={styles.listItem}>
          <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});