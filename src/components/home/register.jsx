import React, {  useState, useEffect, useRef} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import { color } from '../../var';

export default ()=> {
  const [mail, setMail] = useState('');
  const [mailErr, setMailErr] = useState(false);
  const [pass, setPass] = useState('');
  const [passErr, setPassErr] = useState(false);
  const [passVisible, setPassVisible] = useState(true);
  let passRef = useRef(null);

  const user = {
    mail: "admin",
    pass: "123"
  }

  const onLogin = async() => {
    try{
      if(mail.toLowerCase() !== user.mail){
        setMailErr(true);
      } else if (pass !== user.pass){
        setPassErr(true);
        setPass('');
      } else {
        console.log('felicidades');
      }
    }catch(e){
      console.log(e);
    }
  }
  return(
      <Form style={styles.container}>
        <Text style={styles.title}>REGISTRO</Text>
        <Item style={{ borderColor: mailErr ? 'red' : color.prim }}>
          <Input
            placeholder="Correo"
            onChangeText={(text) => setMail(text)}
            value={mail}
            onFocus={()=> { setMailErr(false), setMail('') }}
            returnKeyType="next"
            onSubmitEditing={()=>passRef._root.focus()}
            blurOnSubmit={false}
          />
          <Icon name="mail" />
        </Item>
        <Item style={{ borderColor: passErr ? "red" : color.prim }}>
          <Input
            placeholder="Contraseña"
            secureTextEntry={passVisible}
            onChangeText={(text) => setPass(text)}
            value={pass}
            onFocus={()=> { setPassErr(false), setPass('') }}
            getRef={(el) => { passRef= el }}
            returnKeyType="send"
            onSubmitEditing={onLogin}
          />
          <TouchableOpacity onPress={()=> setPassVisible(!passVisible)}>
            <Icon name="eye" />
          </TouchableOpacity>
        </Item>
        <Button onPress={onLogin} small style={styles.button}>
          <Text>Registrar</Text>
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