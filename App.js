import { } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoallInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  
  const [courseGoal, setCourseGoal] = useState([])
  const [modalIsVisible,setModelIsVisible] = useState(false)

  function startAddGoalHandler(){
    setModelIsVisible(true)
  }
 function endAddGoalHandler(){
  setModelIsVisible(false)
 }
  const addGoalHandler = (enteredGoalText) => {

    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler()
  }

  const deleteGoalHandler=(id)=>{
    setCourseGoal((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal)=> goal.id !== id)
    })
  }

  return (
    <>
<StatusBar style='light'  />
    <View style={styles.appContainer}>
      {/* input area */}
      <Button title='Add New Goal' color='#a065ec'onPress={startAddGoalHandler}/>
    <GoalInput visible = {modalIsVisible} onAddGoal = {addGoalHandler} onCancel={endAddGoalHandler}/>
      {/* List of goals */}
      <View style={styles.goalContainer}>
        {/* <ScrollView alwaysBounceVertical='false'>
        {courseGoal.map((goal,index)=>{
          return  (
            <View style={styles.goalItem} key={index} >
          <Text style={styles.goalText}>{goal}</Text>
          </View>
          )
        })}
      </ScrollView> */}
 

<FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
        {/* we can use one more property keyExtractor which will accept function as a value 
        
        
        keyExtractor={(item,index)=>{
return item.id
        }}


        this property extract key for every item, when fatlist will load the data for first it will automatically call 
        keyExtractor and pass item and index value item will will be automaticall get attach to list 
        */}
  
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  
  },
 
  goalContainer: {
    flex: 5
  },

});
