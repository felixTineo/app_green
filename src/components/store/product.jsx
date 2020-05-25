import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_STORE_PRODUCT } from '../../store/actions';
import { StyleSheet, Image, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import { View, Text, Button, Icon, Thumbnail, Input, Item } from 'native-base';
import { color } from '../../var';
import Search from './search';

export default ()=> {
  const product = useSelector(state => state.store.product);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [friend, setFriend] = useState({});
  const onUser = (user)=> {
    setFriend(user);
    setSearch(false);
  }
  
  const onClose = ()=> {
    setFriend({});
    dispatch({ type: ON_STORE_PRODUCT, product: {} })
  }

  return(
    <Modal
      visible={Object.keys(product).length > 0}
      animationType="fade"
      transparent={false}
    >
      <View style={styles.productInfoCont}>
        <ImageBackground imageStyle={{ height: "100%" }} source={product.img} style={styles.productImage}>
          <View style={{ alignItems: "center", justifyContent: "center", margin: 10 }}>
              <TouchableOpacity onPress={()=>setSearch(true)} style={styles.friendButton}>
                {
                  Object.keys(friend).length > 0
                    ? <Thumbnail source={friend.perfilImg} />
                    : <Icon style={{ color: color.light }} type="FontAwesome5" name="user-plus" />
                }
              </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.infoCont}>
          {
            !search && (
              <>
              <Text>{product.name}</Text>
              <Text>Precio: ${product.price}</Text>
              <Text style={{ fontSize: 12 }}>{product.description}</Text>
              </>
            )
          }
          {
            search &&  <Search onPress={onUser} />
          }
        </View>
          {
            Object.keys(friend).length > 0 && <Item><Input placeholder="Agrega una nota al regalo" /></Item>
          }
      </View>
      <View style={styles.footer}>
        <Button small bordered style={{ borderColor: color.prim }} onPress={onClose}>
          <Text style={{ color: color.prim }}>Cancelar</Text>
        </Button>
        <Button small style={{ marginLeft: 10, backgroundColor: color.prim }}>
          <Text>Enviar</Text>
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
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  infoCont:{
    paddingHorizontal: 15,
  },
  footer:{
    padding: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  friendButton:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.prim,
    borderRadius: 50,
    width: 60,
    height: 60,
  }
})