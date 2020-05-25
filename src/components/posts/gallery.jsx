import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Button, View, Text } from 'native-base';
import { postType } from './constants';

import { color } from '../../var';

const ImgBtn = ({ uri, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={styles.img} source={{ uri }} />
  </TouchableOpacity>
);

export default ({ onNext })=> {
  const [images, setImages] = useState([]);
  const [uri, setUri] = useState(null);
  useEffect(()=> {
    (async()=>{
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if(granted){
        const { assets } = await MediaLibrary.getAssetsAsync();
        setImages(assets);
      }
    })()
  },[])
  useEffect(()=>{ 
    if(images.length > 0) setUri(images[0].uri);
  },[images]);

  return(
    <View style={styles.mainCont}>
      <Image source={{ uri }} style={styles.imgCont} />
      <FlatList          
        style={styles.filesCont}
        data={images}
        renderItem={({ item }) => <ImgBtn onPress={()=> setUri(item.uri)} uri={item.uri} />}
        extraData={images}
        keyExtractor={item => item.id}
        numColumns={5}
      />
      <Button small onPress={()=>onNext(uri, postType.IMAGE)} style={styles.nxtButton}>
        <Text style={{ color: color.light, }}>Siguiente</Text>
      </Button>      
    </View>
  )
}

const styles = StyleSheet.create({
  mainCont:{
    flex: 1,
  },
  imgCont: {
    flex: 2,
    justifyContent: "flex-end"
  },
  filesCont: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  img: {
    width: 65,
    height: 65,
    margin: 3,
  },
  nxtButton:{
    alignSelf: "flex-end",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: color.prim,
  }
});