import React, {Component} from 'react';
import {ScrollView, Button, TextInput, Platform, StyleSheet, Text, View} from 'react-native';
import Ques from '../Ques/Ques';

export default class Main extends Component<Props> {
   constructor() {
      super();

      this.signChangeHandler = this.signChangeHandler.bind(this);

      this.state = {
          points: 0,
          userAns: null,
          flag: true,
          num1: Math.floor(Math.random() * 10) + 1,
          num2: Math.floor(Math.random() * 10) + 1,
          sign: "+"
        };
       this.ans = 0;
   }


     signChangeHandler = () => {

       let num = Math.round((Math.round(Math.random() * 10))/3);
       switch(num){
         case 0:
            this.ans = this.state.num1 - this.state.num2;
            this.setState(prevState =>{
              return {
                sign: "-"
             };
          });break;

          case 1:
             this.ans = this.state.num1 + this.state.num2;
             this.setState(prevState =>{
               return {
                 sign: "+"
              };
           });break;

           case 2:
             this.ans = this.state.num1 * this.state.num2;
             this.setState(prevState =>{
               return {
                 sign: "*"
              };
           });break;

           case 3:
             this.ans = Math.floor(this.state.num1 / this.state.num2);
             this.setState(prevState =>{
               return {
                 sign: "/"
              };
           });break;

        default:
         alert(num);
       };

    };

     userAnswerOnChangeHandler = val => {
        this.setState({
         userAns: val
       });
     };

    placeSubmitHandler = (ans) => {
      this.textInput.clear();
    if (this.state.userAns === ans) {
      alert("True Answer");
      this.setState(prevState => {
         return {
           points: prevState.points + 2,
           num1: Math.floor(Math.random() * 10) + 1,
           num2: Math.floor(Math.random() * 10) + 1,
        };
     }, () => {
        this.signChangeHandler();
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
             <ScrollView
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between'
              }}>

             <Ques num1={this.state.num1}
               num2={this.state.num2}
               points={this.state.points}
               flag={this.state.flag}
               sign={this.state.sign}/>
               </ScrollView>


             <TextInput
                       ref={input => { this.textInput = input }}
                       style={styles.textInput}
                       keyboardType = 'numeric'
                       placeholder='>Your Answer'
                       onChangeText={this.userAnswerOnChangeHandler}
                       placeholderTextColor='white'
                       value={this.state.userAns}
                       underlineColorAndroid='transparent'>
            </TextInput>
            <Button onPress={() => this.placeSubmitHandler((this.ans).toString())}
            title="Answer"
            color= '#08563e' />
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
