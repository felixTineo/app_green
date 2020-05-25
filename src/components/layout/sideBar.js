import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Thumbnail, Container, Header, List, ListItem, Content, Left, Body, Icon, Right } from 'native-base';
import { color } from '../../var';
import { withNavigation } from 'react-navigation';

const MyListItem = ({ text, onPress, icon }) => {

  return(
    <ListItem>
      <TouchableOpacity style={styles.btnListItem} onPress={onPress}>
        <Icon style={styles.listIcon} type="FontAwesome5" name={icon} />
        <Text style={ styles.listText }>
          {text}
        </Text>
      </TouchableOpacity>
    </ListItem>
  )
}

export default withNavigation(
  ({ navigation })=> {
    const user = useSelector(state => state.currentUser);
    return(
      <Container>
        <Header style={styles.header} androidStatusBarColor={color.prim}>
          <Left>
            <Thumbnail small source={user.perfilImg} />
          </Left>
          <Body>
            <Text style={styles.textTitle}>{`${user.name} ${user.lastName}`}</Text>
          </Body>
          <Right style={{ alignItems: "center" }}>
            <Icon style={styles.titleIcon} type="FontAwesome5" name="bitcoin" small />
            <Text style={styles.textTitle}>{`+${user.wallet}`}</Text>
          </Right>
        </Header>
        <Content>
          <List>
            <MyListItem text="inicio" icon="home" onPress={()=>navigation.navigate('wall')} />
            <MyListItem text="perfil" icon="user-alt" onPress={()=>navigation.navigate('perfil')} />
            <MyListItem text="tus regalos" icon="gift" />
            <MyListItem text="servicios" icon="store" />
            <MyListItem text="transacciones" icon="bitcoin" />
            <MyListItem text="editar cuenta" icon="cog" />
            <MyListItem text="privacidad" icon="lock" />
            <MyListItem text="salir" icon="sign-out-alt" onPress={()=> navigation.navigate('login')} />
          </List>
        </Content>
      </Container>
    )
  }  
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.sec,
  },
  textTitle:{
    color: color.light,
    textTransform: "capitalize",
    marginLeft: 5
  },
  btnListItem:{
    flex: 1,
    flexDirection: "row",
  },
  listIcon:{
    fontSize: 16,
  },
  listText: {
    color: color.dark,
    marginLeft: 5,
    textTransform: "capitalize"
  },
  titleIcon:{
    color: color.light,
  }
})