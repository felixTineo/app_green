import React, { useState, useEffect, useReducer } from 'react';
import { color } from '../../var';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Icon, Button } from 'native-base';
import Camera from './camera';
import Gallery from './gallery';
import PostCreator from './postCreator';
import Video from './video';
import Layout from '../layout/layout';
import { withNavigationFocus } from 'react-navigation';

export default withNavigationFocus(({ navigation, isFocused }) => {

  const [visible, setVisible] = useReducer((state, nextState)=> ({ ...state, ...nextState }), {
    camera: false,
    gallery: true,
    video: false,
    postCreator: false,
    postVideo: false,
  });

  const [uri, setUri] = useState('');
  const [postContentType, setPostContentType] = useState('');

  const onVisible = (section) =>{
    setVisible({
      camera: section === 'camera' ? true : false,
      gallery: section === 'gallery' ? true : false,
      video: section === 'video' ? true : false,
      postCreator: section === 'postCreator' ? true : false,
      postVideo: section === 'postVideo' ? true : false,
    })
  }

  /*useEffect(()=>{
    if(isFocused) onVisible('gallery');
  },[isFocused])*/

  const onNext = (uri, type) => {
    setUri(uri);
    setPostContentType(type);
    onVisible('postCreator');
  }

  const { camera, gallery, video, postCreator, postVideo } = visible;
  return(
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {
          gallery && <Gallery onNext={onNext} />
        }
        {
          camera && <Camera onNext={onNext} />
        }
        {
          video && <Video onNext={onNext} />
        }
        {
          postCreator && (
          <PostCreator
            nav={navigation.navigate}
            type={postContentType}
            uri={uri}
            setUri={setUri}
            onVisible={onVisible}
          />
          )
        }
      </View>
      <View style={styles.navCont}>
      <TouchableOpacity
          onPress={()=>onVisible('gallery')}
          style={{
              ...styles.navButton,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: "rgba(0, 0, 0, .1)",
            }}
        >
          <Icon style={styles.navIcon} type="FontAwesome" name="image" />
          <Text 
          style={{
            ...styles.navText,
            fontWeight: visible.gallery ? 'bold' : 'normal'            
          }}>Galeria</Text>
        </TouchableOpacity>        
        <TouchableOpacity onPress={()=>onVisible('camera')} style={styles.navButton}>
          <Icon style={styles.navIcon} type="FontAwesome" name="camera" />
          <Text style={{
            ...styles.navText,
            fontWeight: visible.camera ? 'bold' : 'normal'
          }}
          >Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onVisible('video')} style={styles.navButton}>
          <Icon style={styles.navIcon} type="FontAwesome" name="film" />
          <Text style={{
            ...styles.navText,
            fontWeight: visible.video ? 'bold' : 'normal'
          }}>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  navCont:{
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, .1)",
  },
  navButton:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  navIcon:{
    color: color.prim,
  },
  navText:{
    color: color.prim,
    marginLeft: 10
  }
})