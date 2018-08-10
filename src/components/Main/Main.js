import React, {Component} from 'react';
import {Button, TextInput, Platform, StyleSheet, Text, View} from 'react-native';
import Ques from '../Ques/Ques';

export default class Main extends Component<Props> {
   state = {
       points: 0,
       userAns: null,
       flag: true,
       num1: Math.floor(Math.random() * 10) + 1,
       num2: Math.floor(Math.random() * 10) + 1
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
           points: prevState.points + 2,
           num1: Math.floor(Math.random() * 10) + 1,
           num2: Math.floor(Math.random() * 10) + 1
        };
      });

    }
    else {
      alert("Wrong Answer");
      if(this.state.points === 0){
         this.setState(prevState =>{
           return {
              flag: false
          };
         });
      }
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
             <Ques num1={this.state.num1}
               num2={this.state.num2}
               points={this.state.points}
               flag={this.state.flag}/>
             <TextInput
                       style={styles.textInput}
                       keyboardType = 'numeric'
                       placeholder='>Your Answer'
                       onChangeText={this.userAnswerOnChangeHandler}
                       placeholderTextColor='white'
                       value={this.state.userAns}
                       underlineColorAndroid='transparent'>
            </TextInput>
            <Button onPress={() => this.placeSubmitHandler((this.state.num1+this.state.num2).toString())}
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

     textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: '#ededed'
   },

});
