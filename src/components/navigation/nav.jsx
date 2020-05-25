import React, { useEffect, useState, useReducer } from 'react';
import { TouchableOpacity, StyleSheet, Modal, View, Text } from 'react-native';
import { Footer, Icon } from 'native-base';
import { color } from '../../var';

const IconBtn = ({ name, onPress, active, note }) => {
  return(
    <TouchableOpacity style={{ ...styles.btnIcon, backgroundColor: active ? color.prim : color.light }} onPress={onPress}>
      <Icon style={{ color: active ? color.light : note ? "red" : color.prim }} type="FontAwesome" name={name} />
    </TouchableOpacity>
  )
}

export default ({ navigation })=>{
  const [active, setActive] = useReducer((prevState, nextState)=>({ ...prevState, ...nextState }), {
    wall: true,
    search: false,
    qr: false,
    store: false,
    create: false,
    note: false,
    perfil: false,
  });

  const onNav = (section) => {
    setActive({
      wall: section === 'wall' ? true : false,
      search: section === 'search' ? true : false,
      qr: section === 'qrcode' ? true : false,
      store: section === 'store' ? true : false,
      create: section === 'postCreator' ? true : false,
      note: section === 'notifications' ? true : false,
      perfil: section === 'perfil' ? true : false,
    });
    navigation.navigate(section);
  }
  return(
    <Footer style={styles.footer}>
      <IconBtn 
        name="home"
        active={active.wall}
        onPress={()=> onNav("wall")}
      />
      <IconBtn 
        name="search"
        active={active.search}
        onPress={()=> onNav("search")}
      />
      <IconBtn 
        name="qrcode"
        active={active.qr}
        onPress={()=> onNav("qrcode")}
      />
      <IconBtn
        name="gift"
        active={active.store}
        onPress={()=> onNav("store")}
      />
      <IconBtn 
        name="plus"
        active={active.create}
        onPress={()=> onNav("postCreator")}
      />
      <IconBtn 
        name="heart"
        active={active.note}
        onPress={()=> onNav("notifications")}
      />
      <IconBtn 
        name="user"
        active={active.perfil}
        onPress={()=> onNav("perfil")}
      />
    </Footer>
  )
}

const styles = StyleSheet.create({
  footer:{
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: color.gray1,
    paddingTop: 5,
  },
  btnIcon:{
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
  }
})