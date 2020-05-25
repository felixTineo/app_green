import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Content, Icon, Text, Left, Right, Thumbnail, View } from 'native-base';
import { color } from '../../var';
import SideMenu from 'react-native-side-menu';
import SideBar from './sideBar';

export default ({ children })=>{
  const user = useSelector(state => state.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  return(
    <SideMenu
      menu={<SideBar />}
      isOpen={isOpen}
      onChange={isOpen => setIsOpen(isOpen)}
      menuPosition="right"
    >
      <Container>
        <Header androidStatusBarColor={color.prim} style={styles.header}>
          <Left><Text style={styles.logo}>Greenlink</Text></Left>
          <Right>
            <TouchableOpacity onPress={()=> setIsOpen(true)}>
              <Icon style={{ color: color.light, fontSize: 20 }} type="FontAwesome5" name="bars" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          {children}
        </Content>
      </Container>
    </SideMenu>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: color.prim,
    height: 45,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo:{
    color: color.light,
    fontFamily: 'Pacifico',
    fontSize: 18,
  }
})