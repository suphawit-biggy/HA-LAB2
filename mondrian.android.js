import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Lab2 extends Component {
  render() {
    return(
      <View style = {styles.containerCol}>
        <View style = {styles.containerRow}>
          <View style = {styles.a}>
            <View style = {styles.ab1}></View>
            <View style = {styles.ab2}></View>
            <View style = {styles.ab3}></View>
          </View>
          <View style = {styles.b}>
            <View style = {styles.ab1}></View>
            <View style = {styles.ab2}></View>
            <View style = {styles.ab3}></View>
          </View>
          <View style = {styles.containerRow}>
            <View style = {styles.c}>
              <View style = {styles.c1}></View>
              <View style = {styles.c2}></View>
              <View style = {styles.ab3}></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerCol: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'column',
  },
  containerRow: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'row',
  },
  a: {
    flex: 0.65,
    borderWidth: 1,
    flexDirection: 'column',
  },
  b: {
    flex: 0.5,
    borderWidth: 1,
    flexDirection: 'column',
  },
  c: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'column',
  },
  ab1: {
    flex: 0.4,
    borderWidth: 1,
    flexDirection: 'row',
  },
  ab2: {
    flex: 0.25,
    borderWidth: 1,
    flexDirection: 'row',
  },
  ab3: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
  },
  c1: {
    flex: 0.4,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#2D2BB4',
  },
  c2: {
    flex: 0.25,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  }  
});

AppRegistry.registerComponent('Lab2', () => Lab2);
