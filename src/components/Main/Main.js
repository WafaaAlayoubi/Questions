import React, {Component} from 'react';
import {Button, TextInput, Platform, StyleSheet, Text, View} from 'react-native';

const  num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;


export default class Main extends Component<Props> {
   state = {
       points: 0,
       userAns: null
     };

     userAnswerOnChangeHandler = val => {
        this.setState({
         userAns: val
       });
     };

    placeSubmitHandler = (ans) => {
    if (this.state.userAns === ans) {
      alert("True Answer");
      this.setState(prevState =>{
         return {
           points: prevState.points + 2
        };
      });
    }
    else {
      alert("Wrong Answer");
      this.setState(prevState =>{
        return {
           points:  Math.floor(prevState.points / 2)
       };
      });
}
  };
  render() {
    return (

      <View style={styles.container}>
            <View style={styles.header}>
                 <Text style={styles.headerText}>- Math -</Text>
             </View>
             <View style={styles.mainView}>
               <Text style={styles.QuesText}>{num1} + {num2}</Text>
               <Text style={styles.points}>{this.state.points}</Text>
             </View>
             <TextInput
                       style={styles.textInput}
                       keyboardType = 'numeric'
                       placeholder='>Your Answer'
                       onChangeText={this.userAnswerOnChangeHandler}
                       placeholderTextColor='white'
                       value={this.state.userAns}
                       underlineColorAndroid='transparent'>
            </TextInput>
            <Button onPress={() => this.placeSubmitHandler((num1+num2).toString())}
            title="Press Me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
    },
    header: {
      backgroundColor: '#34B48D',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
     },
     headerText: {
         color: 'white',
         fontSize: 22,
         padding: 20
     },
     mainView: {
        flex: 1,
       alignItems: 'center',

     },
     QuesText: {
        flex: 1,
        position: 'absolute', top: 100,
        fontSize: 30,
        padding: 20
     },
     textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: '#ededed'
   },
   points: {
      flex: 1,
      position: 'absolute', top: 160,
      fontSize: 40,
      padding: 20
   }
});
