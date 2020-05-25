import React, {  useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { ON_CURRENT_USER } from '../../store/actions';
import { StyleSheet } from 'react-native';
import { View, Form, Item, Input, Label, Button, Text } from 'native-base';
import { color } from '../../var';
import user from '../../test/admin';

export default ({ navigation })=> {
  const [mail, setMail] = useState('');
  const [mailErr, setMailErr] = useState(false);
  const [pass, setPass] = useState('');
  const [passErr, setPassErr] = useState(false);
  let passRef = useRef(null);
  const dispatch = useDispatch();
  const onLogin = async() => {
    try{
      if(mail.toLowerCase() !== user.mail){
        setMailErr(true);
      } else if (pass !== user.pass){
        setPassErr(true);
        setPass('');
      } else {
        dispatch({ type: ON_CURRENT_USER, user });
        navigation.navigate('wall');
      }
    }catch(e){
      console.log(e);
    }
  }
  return(
      <Form style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <Item style={{ borderColor: mailErr ? 'red' : color.prim }} floatingLabel>
          <Label>Correo</Label>
          <Input
            onChangeText={(text) => setMail(text)}
            value={mail}
            onFocus={()=> { setMailErr(false), setMail('') }}
            returnKeyType="next"
            onSubmitEditing={()=>passRef._root.focus()}
            blurOnSubmit={false}
          />
        </Item>
        <Item style={{ borderColor: passErr ? "red" : color.prim }} floatingLabel>
          <Label>Contraseña</Label>
          <Input
            secureTextEntry
            onChangeText={(text) => setPass(text)}
            value={pass}
            onFocus={()=> { setPassErr(false), setPass('') }}
            getRef={(el) => { passRef= el }}
            returnKeyType="send"
            onSubmitEditing={onLogin}
          />
        </Item>
        <Button onPress={onLogin} small style={styles.button}>
          <Text>Entrar</Text>
        </Button>
      </Form>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "80%",
    alignItems: "center",
    overflow: "hidden",
  },
  title:{
    marginTop: 10,
    fontSize: 24,
    color: color.prim,
    fontFamily: "Sansita",
  },
  button:{
    backgroundColor: color.prim,
    marginVertical: 15,
  },
})