import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, StyleSheet, Modal } from 'react-native'
import {
  Container,
  Header,
  Item,
  Content,
  Input,
  Button,
  Icon,
  Text,
  View,
  Thumbnail,
} from 'native-base';

import { color } from '../../var';
import Layout from '../layout/layout';

/**************** *
Test - Users
******************/
import users from '../../test/users';
/************************************/

const User = ({ user, onPress }) => {

  const { perfilImg, fullName, _id } = user;

  return(
    <TouchableOpacity onPress={()=>onPress(user)} style={styles.user}>
      <Thumbnail source={perfilImg} />
      <Text style={styles.fullName}>{fullName}</Text>
    </TouchableOpacity>
  )
}

export default ({ visible, onPress })=> {
  const [suggest, setSuggest] = useState([]);
  const onSearch = async(text) => {
    /*try{
      if(val){
        const res = await axios.get(`${URL}/user/search/${val.toLowerCase()}`);
        setSuggest(res.data);
      }else {
        setSuggest([]);
      }
    }catch(e){
      console.log(e);
    }*/
    if(text){
      const name = text.toLowerCase();
      const suggest = users.filter(item => item.fullName.toLowerCase().indexOf(name) > -1);
      setSuggest(suggest);
    }else{
      setSuggest([]);
    }
  }
  return(
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
    >
      <Container>
        <Header androidStatusBarColor={color.prim} style={{ backgroundColor: color.prim }} searchBar rounded>
          <Item>
            <Icon type="FontAwesome" name="search" />
            <Input
              onChangeText={(text) => onSearch(text)}
              placeholder="Buscar"
            />
          </Item>
        </Header>
        <Content>
          {
            suggest.map(user => <User user={user} onPress={onPress} />)
          }
        </Content>
        </Container>
      </Modal>
  )
}


const styles = StyleSheet.create({
  user:{
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "rgba(0,0,0, .1)",
    borderWidth: 1
  },
  fullName: {
    textTransform: "capitalize",
    marginLeft: 8,
  }
})
