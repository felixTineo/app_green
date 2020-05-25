import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { View, Text, Input, Label, Form, Item, Textarea, Right, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { ON_CURRENT_USER_POST } from '../../store/actions';
import { color } from '../../var';
import { Video } from 'expo-av';
import { postType } from './constants';
import PostFormData from '../../util/postFormData';
import uuid from 'uuid/v1';

export default ({ uri, type, nav, onVisible, setUri })=> {
  const [history, setHistory] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);
  const onSubmit = async()=>{
    try{
      const uriPart = uri.split(".");
      const fileExtension = uriPart[uriPart.length - 1];
      const img = {
        uri,
        type: `image/${fileExtension}`,
        name: `${uuid()}.${fileExtension}`,
      }
      const post = {
        history,
        img,
        targetId: user._id,
      }
      const data = PostFormData(post);
      /**TEST */
      const testData = {
        _id: uuid(),
        author:{
          _id: user._id,
          perfilImg: user.perfilImg,
          name: user.name,
          lastName: user.lastName,
        },
        history,
        img,
        likes: [],
        comments: [],
        gifts: [],
        date: Date.now(),
      }
      /**TEST */
      onVisible('gallery');
      setUri('');
      setHistory('');
      dispatch({ type: ON_CURRENT_USER_POST, post: testData });
      nav('perfil');
      //console.log(data);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <View style={styles.mainCont}>
      {
        type === postType.IMAGE && <Image style={styles.imgCont} source={{ uri }} />
      }
      {
        type === postType.VIDEO && (
          <Video 
            source={{ uri }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            useNativeControls
            //shouldPlay
            //isLooping
            style={{ flex: 2 }}
          />
        )
      }
      <View style={styles.infoCont}>
        <Form style={styles.form}>
          <Textarea onChangeText={val => setHistory(val)} rowSpan={5} placeholder="¿Quieres agregar una historia?" />
        </Form>
      </View>
      <Button onPress={onSubmit} small style={styles.button}>
        <Text style={{ color: color.light, }}>publicar</Text>
      </Button>      
    </View>
  )
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  imgCont: {
    flex: 2,
    justifyContent: "flex-end"
  },
  infoCont: {
    flex: 1,
    padding: 5,
  },
  img: {
    flex: 1,
  },
  form: {
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button:{
    alignSelf: "flex-end",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: color.prim,
  }
})