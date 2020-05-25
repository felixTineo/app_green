import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon } from 'native-base';
import { color } from '../../var';

export default () => {

  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Greenlink</Text>
      <View style={styles.coinInfo}>
        <Icon style={styles.icon} type="FontAwesome5" name="shopware" />
        <Text style={styles.text}> 50</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.prim,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  logo:{
    fontFamily: "Pacifico",
    color: color.light,
    fontSize: 18,
  },
  coinInfo:{
    flexDirection: "row",
    alignItems: "center",
  },
  icon:{
    fontSize: 16,
    color: color.light,
  },
  text:{
    color: color.light,
  }
});