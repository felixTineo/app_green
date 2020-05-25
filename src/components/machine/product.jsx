import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_MACHINE_PRODUCT } from '../../store/actions';
import { StyleSheet, Image, Modal } from 'react-native';
import { View, Text, Button } from 'native-base';
import { color } from '../../var';

export default ()=> {
  const product = useSelector(state => state.machine.product);
  const dispatch = useDispatch();
  return(
    <Modal
      visible={Object.keys(product).length > 0}
      animationType="fade"
      transparent={false}
    >
      <View style={styles.productInfoCont}>
        <Image source={product.img} style={styles.productImage} />
        <View style={styles.infoCont}>
          <Text>{product.name}</Text>
          <Text>Precio: ${product.price}</Text>
          <Text>{product.description}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button bordered style={{ borderColor: color.prim }} onPress={()=> dispatch({ type: ON_MACHINE_PRODUCT, product: {} })}>
          <Text style={{ color: color.prim }}>Atras</Text>
        </Button>
        <Button style={{ marginLeft: 10, backgroundColor: color.prim }}>
          <Text>Canjear</Text>
        </Button>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  productInfoCont:{
    flex: 1,
  },
  productImage:{
    marginVertical: 15,
    width: "100%",
    height: "50%",
  },
  infoCont:{
    padding: 15,
  },
  footer:{
    padding: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  }
})