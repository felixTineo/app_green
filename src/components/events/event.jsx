
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Button, View, Text } from 'native-base';
import { color } from '../../var';

export default ({ img, title, subTitle, prim, sec }) => {

  return(
    <ImageBackground style={styles.eCont} source={img}>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ backgroundColor: prim, color: color.light, fontSize: 9, marginBottom: 3 }}>{title}</Text>
        <Text style={{ backgroundColor: prim, color: color.light, fontSize: 9 }}>{subTitle}</Text>
      </View>
      <Button small style={{ backgroundColor: prim, alignSelf: "flex-end", padding: 6 }}>
        <Text style={{ color: color.light, fontSize: 11, fontWeight: "bold" }}>DONAR</Text>
      </Button>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  eCont:{
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 150,
    height: 250,
    margin: 5,
    padding: 5,
  }
})