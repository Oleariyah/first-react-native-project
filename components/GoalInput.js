import React from 'react';
import {
  StyleSheet, 
  TextInput,
  Modal, 
  Button,
  View 
 } from 'react-native';


export default props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Course Goal" 
            style={styles.input} 
            onChangeText={props.goalInputHandler}
            value={props.goal} 
          />
        <View style={styles.buttonContainer}>
          <Button title="ADD" onPress={props.addGoalHandler} />
          <Button title="CANCEL" onPress={props.onCancel} color="red" />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    marginBottom: 5,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    width: "80%"
  }
});
