import { View, Button, TextInput, StyleSheet, Modal,Image } from 'react-native'
import { useState } from 'react'
import goal from '../assets/goal.png'
const GoalInput = (props) => {
    const [enteredGoalText, setEnterGoalText] = useState('')
    function goalInputHandler(enteredText) {
        setEnterGoalText(enteredText)
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText)
        setEnterGoalText('')
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput style={styles.textInput} onChangeText={goalInputHandler}
                    value={enteredGoalText} placeholder='Your course goal' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>


                    <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
      
                    </View>
                    <View style={styles.button}>
                    <Button onPress={addGoalHandler} title='Add Goal' color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor:'red',
        // borderWidth:1\
        padding:16,
        backgroundColor:'#311b6b'
    },
    textInput: {
        borderWidth: 1,
       borderColor:'#e4d0ff',
       backgroundColor:'#e4d0ff',
       color:'#120438',
       borderRadius:6,
       width:'100%',
       padding:16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:16
    },
    button:{
        width:100,
        marginHorizontal:8
    },
    image:{
        width:100,
        height:100,
        margin:20
    }
})