import React, {Component} from 'react';
import {Button, TextInput, Platform, StyleSheet, Text, View} from 'react-native';

const ques = (props) => {
   if (props.flag === false){
      return (
         <View style={styles.mainView}>
            <Text style={styles.points}>You Lose !!</Text>
         </View>
      );
   }
   return (
   <View style={styles.mainView}>
     <Text style={styles.QuesText}>Qustion: {props.num1} {props.sign} {props.num2}</Text>
     <Text style={styles.points}>Points: {props.points}</Text>
    </View>
);
};

const styles = StyleSheet.create({
   QuesText: {
     flex: 1,
     position: 'absolute', top: 100,
     fontSize: 40,
     padding: 20
   },
   mainView: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: '#dbe0de'

   },
   points: {
      flex: 1,
      position: 'absolute', top: 180,
      fontSize: 50,
      padding: 20
   }
});
export default ques;
