import React, {Component} from 'react';
import {TextInput, Platform, StyleSheet, Text, View} from 'react-native';

export default class Main extends Component<Props> {
   state = {
       points: 0
     };
  render() {
     let num1 = Math.floor(Math.random() * 100) + 1;
     let num2 = Math.floor(Math.random() * 100) + 1;
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                 <Text style={styles.headerText}>- Math -</Text>
             </View>
             <View style={styles.mainView}>
               <Text style={styles.QuesText}>{num1} + {num2}</Text>
             </View>
             <TextInput
                       style={styles.textInput}
                       placeholder='>Your Answer'
                       placeholderTextColor='white'
                       underlineColorAndroid='transparent'>
                   </TextInput>
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
       alignItems: 'center',

     },
     QuesText: {
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
});
