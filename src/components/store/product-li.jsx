import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_STORE_PRODUCT } from '../../store/actions';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'native-base';
import { color } from '../../var';

export default ({ product })=> {
  const dispatch = useDispatch();
  return(
    <TouchableOpacity onPress={()=> dispatch({ type: ON_STORE_PRODUCT, product })} style={styles.productButton}>
      <ImageBackground style={styles.thumbnail} imageStyle={styles.imageStyle} source={product.img}>
        <Text style={styles.priceStyle}>${product.price}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  productButton:{
    marginHorizontal: 5,
    marginTop: 10,
  },
  thumbnail:{
    //alignItems: "flex-end",
    justifyContent: "flex-end",
    width: 100,
    height: 150,
  },
  imageStyle:{
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, .3)"
  },
  priceStyle:{
    backgroundColor: color.prim,
    color: color.light,
    textAlign: "right",
    paddingRight: 3
  }
})