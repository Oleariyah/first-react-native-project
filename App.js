import React, { useState } from 'react';
import {
   StyleSheet,
   View, 
   Button,
   ScrollView,  
   FlatList 
  } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goal, setGoal ] = useState("");
  const [goals, setCourseGoals] = useState([]);
  const [openModal, setModal] = useState(false);

  const goalInputHandler = enteredText => {
    if (enteredText !== "") {
      setGoal(enteredText);
    }
  }
  const addGoalHandler = () => {
    setCourseGoals( currentGoals => [
      ...currentGoals,
      { 
        key: Math.random().toString(),   
        value: goal
      }
    ]);
    setModal(false);
    setGoal("");
  }
  const removeGoalHandler = id => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== id)
    })
  }

  const cancelAddNewGoal = () => {
    setModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setModal(true)} />
      <GoalInput 
        goalInputHandler={goalInputHandler} 
        addGoalHandler={addGoalHandler}
        onCancel={cancelAddNewGoal} 
        goal={goal}
        visible={openModal}
        />
      <FlatList 
        data={goals}
        renderItem={
          itemData => (
          <GoalItem 
          onDelete={() => removeGoalHandler(itemData.item.key)}
          title={itemData.item.value} 
          />)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});
