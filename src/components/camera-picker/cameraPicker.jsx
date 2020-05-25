import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_LAYOUT_CAMERAPICKER } from '../../store/actions';
import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { View, Icon, Text, Button } from 'native-base';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { color } from '../../var';

export default ({ onNext, visible, onClose })=> {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [size, setSize] = useState(null);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  let camera = useRef(null);

  const onPermission = async() => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }
  
  useEffect(() => {
    onPermission();
  },[hasPermission]);

  useEffect(()=> {
    (async ()=> {
      const size = await camera.getAvailablePictureSizesAsync('4:3');
      setSize(size[2]);
    })();
  },[camera]);

  const onCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }

  const onSnap = async()=> {
    if(camera){
      setDisable(true);
      const { uri } = await camera.takePictureAsync();
      onNext(uri);
    }
  }
  const onPicker = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let { uri } = await ImagePicker.launchImageLibraryAsync();
    onNext(uri)
  }

  if(hasPermission){
    return(
      <Modal
        animationType="slide"
        visible={visible}
        transparent={false}
      >
        {console.log(type)}
        <View style={styles.cameraCont}>
          <Camera
            ref={ref => { camera = ref }}
            style={styles.camera}
            type={type}
            ratio="4:3"
            pictureSize={size}          
          >
            <View>
              <Button bordered style={styles.btnClose}>
                <Text onPress={onClose} style={{ color: color.prim }}>Cancelar</Text>
              </Button>
            </View>
            <View>
              <View>
                <TouchableOpacity
                  style={styles.snapBtn}
                  onPress={onSnap}
                />
              </View>
              <View style={styles.cameraFooter}>
                <TouchableOpacity
                  onPress={onCameraType}
                >
                  <Icon style={styles.cameraFooterIcons} type="FontAwesome5" name="sync" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onPicker}
                >
                  <Icon style={{ ...styles.cameraFooterIcons, marginLeft: 25 }} type="FontAwesome5" name="image" />
                </TouchableOpacity>
              </View>              
            </View>
          </Camera>
        </View>
      </Modal>
    )    
  }else {
      return(
        <View>
          <Text>No tines permiso</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  cameraCont:{
    flex: 1,
  },
  camera:{
    flex: 1,
    justifyContent: "space-between",
  },
  btnClose:{
    margin: 10,
    borderColor: color.prim,
    alignSelf: "flex-end",
  },
  snapBtn:{
    backgroundColor: color.prim,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  cameraFooter:{
    flexDirection: "row",
    padding: 15,
  },
  cameraFooterIcons:{
    color: color.light,
  }
});