import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Icon } from 'native-base';
import { color } from '../../var';

export default ({ active, name }) => {

  return(
    <View
      style={{ ...styles.btnIcon, backgroundColor: active ? color.prim : "transparent" }}
    >
      {console.log(active)}
      <Icon
        type="FontAwesome"
        name={name}
        style={{
          color: active ? color.light : color.prim,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  btnIcon:{
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
  }
})